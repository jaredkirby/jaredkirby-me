'use client';

import {
  Textarea,
  TextInput,
  Grid,
  Button,
  Card,
  Text,
  Paper,
  ActionIcon,
  rem,
  Group,
  Tooltip,
} from '@mantine/core';
import {
  IconCopy,
  IconArrowRight,
  IconThumbUp,
  IconThumbDown,
  IconCheck,
} from '@tabler/icons-react';

import React from 'react';
import { useState, useEffect } from 'react';
import { apiBaseUrl } from './utils/constants';
import { useScrollIntoView } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';

export function PeerReviewApp() {
  // State for API error
  const [apiError, setApiError] = useState<string | null>(null);

  // States for form fields
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [streamedResponse, setStreamedResponse] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [voice, setTone] = useState<string>('');
  const [prompt, setMessage] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [responseContent, setResponseContent] = useState<string>('');
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 10,
    cancelable: true,
    isList: true,
  });
  const [firstChunkReceived, setFirstChunkReceived] = useState(false);

  // Icons
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const sendPeerReviewRequest = async () => {
    if (ws) {
      setIsSending(true);
      try {
        const requestData = {
          topic,
          prompt,
          voice,
        };
        ws.send(JSON.stringify(requestData));
      } catch (error) {
        console.error('Error processing image:', error);
        setApiError('Failed to process image.');
      }
    }
  };

  const connectWebSocket = () => {
    const websocket = new WebSocket(apiBaseUrl + '/sleepy-panda-ws');

    websocket.onmessage = (event) => {
      setStreamedResponse((prev) => {
        // Concatenate new streamed data
        const updatedResponse = prev + event.data;

        // Update responseContent with the updated response
        setResponseContent(updatedResponse);

        if (!firstChunkReceived) {
          setFirstChunkReceived(true);
          setIsSending(false);
          scrollIntoView({ alignment: 'center' });
        }

        return updatedResponse;
      });
    };

    setWs(websocket);
  };

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return (
    <Card mb='lg' shadow="sm" padding="xl" radius="lg">
      <Grid justify="center" align="flex-start">
        <Grid.Col span={6}>
          <TextInput
            label="Topic"
            description="What is the topic of discussion?"
            variant="filled"
            size="lg"
            radius="lg"
            placeholder="Medical Diagnosis"
            value={topic}
            onChange={(e) => setTopic(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Tone"
            description="What should the tone of the response be?"
            variant="filled"
            size="lg"
            radius="lg"
            placeholder="Casual"
            value={voice}
            onChange={(e) => setTone(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Message"
            description="What is the message you want to respond to?"
            variant="filled"
            size="lg"
            radius="lg"
            autosize
            minRows={4}
            maxRows={20}
            placeholder={`"YouTube video writer and editor for a DIY Entrepreneurs focused channel."`}
            value={prompt}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Additional Notes"
            description="Any specific instructions or points you would like to address in your response?"
            variant="filled"
            size="lg"
            radius="lg"
            autosize
            minRows={1}
            maxRows={20}
            placeholder="Optional*"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col>
          <Button
            mt={12}
            size="lg"
            fullWidth
            color="teal"
            variant="light"
            radius="md"
            loading={isSending}
            onClick={sendPeerReviewRequest}
          >
            Write Response
          </Button>
        </Grid.Col>
        {apiError && <Text c="red.500">{apiError}</Text>}
      </Grid>

      {/* Response */}
      <div ref={targetRef} id="response-content">
        {streamedResponse && (
          <div>
            <Group mt={50} justify="space-between" align="flex-end">
              <Text fw={500} size="xl">
                Response:
              </Text>
              <ActionIcon.Group>
                <ActionIcon size="lg" color="teal" variant="light" radius="md">
                  <IconThumbUp style={{ width: '70%', height: '70%' }} stroke={1.2} />
                </ActionIcon>
                <ActionIcon size="lg" color="teal" variant="light" radius="md">
                  <IconThumbDown style={{ width: '70%', height: '70%' }} stroke={1.2} />
                </ActionIcon>
                <Tooltip
                  label="Copy response"
                  withArrow
                  transitionProps={{ transition: 'pop', duration: 300 }}
                >
                  <ActionIcon
                    size="lg"
                    color="teal"
                    variant="light"
                    radius="md"
                    onClick={() => {
                      navigator.clipboard.writeText(streamedResponse);
                    }}
                  >
                    <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.2} />
                  </ActionIcon>
                </Tooltip>
              </ActionIcon.Group>
            </Group>
            {streamedResponse && <ReactMarkdown>{streamedResponse}</ReactMarkdown>}
          </div>
          )}
      </div>
    </Card>
  );
}
