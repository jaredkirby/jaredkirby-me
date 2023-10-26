'use client';

import { useState } from 'react';
import {
  Textarea,
  TextInput,
  Grid,
  Button,
  Card,
  Text,
  Switch,
  ActionIcon,
  rem,
  Space,
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

export function PeerReviewApp() {
  // State for API error
  const [apiError, setApiError] = useState<string | null>(null);

  // States for form fields
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [message, setMessage] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [responseContent, setResponseContent] = useState('');
  const [requestChanges, setRequestChanges] = useState('');
  const [useGpt4, setUseGpt4] = useState(false);

  // Icons
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const sendPeerReviewRequest = async () => {
    setIsSending(true);

    // Initialize WebSocket connection
    const ws = new WebSocket('ws://api-tools-production.up.railway.app/api/tool_peer_review/peer-execute');

    // When the connection is open, send initial data
    ws.onopen = () => {
      const initialData = {
        topic,
        prompt: message,
        instruct: "Requested changes to previous attempt: " + (requestChanges || additionalNotes),
        voice: tone,
        model: useGpt4 ? "gpt-4" : "",
        chat_history: responseContent ? "Here is your previous attempt: " + responseContent : ""
      };
      ws.send(JSON.stringify(initialData));
    };

    // Listen for messages from the server
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResponseContent((prevContent) => prevContent + data.result);
    };
  
    // Handle any errors that occur
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setIsSending(false);
    };
  
    // Handle any errors that occur
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setIsSending(false);
    };

  };

  return (
    <Card shadow="md" padding="xl" radius="lg">
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
            value={tone}
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
            value={message}
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
        <Grid.Col span={12}>
          <Switch
            label="Use GPT-4"
            description="Slower but more accurate. Better for technical/medical writing."
            color="teal"
            ml={5}
            checked={useGpt4}
            onChange={(e) => setUseGpt4(e.currentTarget.checked)}
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

      {responseContent && (
        <Card shadow="md" padding="lg" radius="lg">
          <Card shadow="sm" padding="xl" radius="lg">
            <Group mb="md" justify="space-between" align="flex-end">
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
                      navigator.clipboard.writeText(responseContent);
                    }}
                  >
                    <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.2} />
                  </ActionIcon>
                </Tooltip>
              </ActionIcon.Group>
            </Group>
            <div>
              {responseContent.split('\n').map((line, index, array) => (
                <>
                  {line}
                  {index === array.length - 1 ? null : <br />}
                </>
              ))}
            </div>
          </Card>
          <Space h="lg" />
          <Textarea
            rightSectionWidth={50}
            rightSection={
              <ActionIcon
                size={32}
                radius="lg"
                color="teal"
                variant="filled"
                onClick={sendPeerReviewRequest}
              >
                <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            }
            label="Request Changes"
            description="If you would like changes made, please provide your request below."
            variant="filled"
            size="lg"
            radius="lg"
            autosize
            placeholder={'"Please add a comment about the importance of sleep."'}
            value={requestChanges}
            onChange={(e) => setRequestChanges(e.currentTarget.value)}
          />
        </Card>
      )}
    </Card>
  );
}
