'use client';

import { useState } from 'react';
import { Card, Text, Button, Textarea, Image, Tooltip, rem, Container, Space, Center, ActionIcon, Group } from '@mantine/core';
import { IconInfoCircle, IconCheck, IconCopy, IconArrowRight, IconThumbUp, IconThumbDown } from '@tabler/icons-react';

export function DOSToolCard() {
  // State for API error
  const [apiError, setApiError] = useState<string | null>(null);

  // States for form fields
  const [topic, setTopic] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [responseContent, setResponseContent] = useState('');
  const [requestChanges, setRequestChanges] = useState('');
  const [useGpt4, setUseGpt4] = useState(false);

  // Icons
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  interface MockResponse {
    ok: boolean;
    status: number;
    json: () => Promise<any>;
  }

  function TaskDescription() {
    const rightSection = (
      <Tooltip
        label="This tool will analyze the job description for keywords and phrases."
        position="top-end"
        withArrow
        transitionProps={{ transition: 'rotate-left', duration: 500 }}
      >
        <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
          <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </Text>
      </Tooltip>
    );
  
    return (
      <Textarea
        radius="md"
        rightSection={rightSection}
        autosize={true}
        minRows={4}
        label="Task Description"
        placeholder={`YouTube video writer and editor for a DIY Entrepreneurs focused channel.`}
        onChange={(e) => setTopic(e.currentTarget.value)}
      />
    );
  }

  const mockDOSToolRequest = (): Promise<MockResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          json: () =>
            Promise.resolve({
              result:
                "Dear [Classmate's Name], Thank you for sharing your insights on impaired mood regulation and its association with altered perception of reality. Your clear description of the symptoms, including sudden mood swings, delusions, and verbal outbursts, helps to paint a detailed picture of this mental state. I particularly appreciate your definition of impaired mood regulation, which emphasizes the multifaceted nature of this condition, encompassing affective, cognitive, somatic, and physiological manifestations that can range from mild to severe. It's crucial to have such a comprehensive understanding when diagnosing and managing patients with this condition. Moreover, your diagnostic reasoning further strengthens your analysis. The resident's altered state of reality, consistent mood swings, and expression of a 'bad feeling' are all key indicators that support your observations. As a result, it seems like a thorough evaluation should be conducted to explore the underlying causes and potential treatment options. In relation to your contribution, I would like to delve deeper into the impact of altered perceptions of reality on a person's overall well-being. Considering the significant role perception plays in shaping an individual's emotional state, how might these altered perceptions affect the patient's capacity to engage with their environment, build meaningful relationships, or make decisions about their own care? By reflecting on the complex interplay between altered perception, mood regulation, and daily functioning, we can gain a more comprehensive understanding of the challenges faced by individuals experiencing this condition. It opens up the opportunity for a broader discussion on potential therapeutic interventions or approaches that can address these specific impairments in perception. Once again, thank you for sharing your thoughts. I look forward to hearing your viewpoints and engaging in further discussion. Best regards, [Your Name]",
            }),
        });
      }, 2000);
    });
  };

  const sendDOSToolRequest = async () => {
    setIsSending(true);
    const formData = new FormData();
    formData.append('topic', topic);
    formData.append(
      'instruct',
      'Requested changes to previous attempt: ' + requestChanges || additionalNotes
    );
    if (responseContent) {
      formData.append('chat_history', 'Here is your previous attempt: ' + responseContent);
    }

    // Function to send data to backend
    try {
      //const response = await fetch(
      //  'https://api-tools-production.up.railway.app/api/tool_peer_review/peer-execute',
      //  {
      //    method: 'POST',
      //    body: formData,
      //  }
      //);

      // Mock response
      const response = await mockDOSToolRequest();

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.ok) {
        setResponseContent(data.result || 'No result');
      } else {
        setApiError(`Failed to get request: ${data.error || response.statusText}`);
      }
    } catch (error: unknown) {
      console.error('Error occurred:', error);
      if (error instanceof Error) {
        setApiError(`Failed to fetch: ${error.message}`);
      } else {
        setApiError('An unknown error occurred.');
      }
    }
    setIsSending(false);
  };

  return (
    <Container p="sm">
      <Text pb="xs" fz="lg" fw={500}>
        Give ChatGPT a persona
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Tools like ChatGPT can benefit from a well defined persona specific to desired outcome. This
        tool will help you define the best persona for your task.
      </Text>
      <Space h='md' />
      <Center>
        <Card shadow="md" radius="lg" padding="lg" withBorder bg="--mantine-color-dark-4">
          <Card.Section>
            <Image src="/RolePilotHero.png" alt="RolePilot" height={110} />
          </Card.Section>
          <Container px={0}>
            <Text mt={9} size="xl" fw={700}>
              RolePilot
            </Text>
            <Text size="sm" c="dimmed">
            Upload your resume and job description to get started.
            </Text>
          </Container>
          <Space h="md" />
          <TaskDescription />
          <Space h="md" />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md" loading={isSending} onClick={sendDOSToolRequest}>
            Generate GPT Role
          </Button>
          {apiError && <Text c="red.500">{apiError}</Text>}

          {/* Response */}

          {responseContent && (
            <Card shadow="md" padding="lg" radius="lg" withBorder='false'>
              <Card shadow="sm" padding="md" radius="lg">
                <Group mb="md" justify="space-between" align="flex-end">
                  <Text fw={400}>
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
                    onClick={sendDOSToolRequest}
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
      </Center>
    </Container>
  );
}
