'use client';

import { Card, Image, Text, Button, Textarea, Stack, Tooltip, rem, Container } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { DocUpload } from '../FileInput/DocUpload';

function DocQ() {
  const rightSection = (
    <Tooltip
      label="This tool will analyze the job description for keywords and phrases."
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
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
      label="Job Description"
      placeholder={`AI Engineer\nJob Description: We are looking for a AI Engineer to join our team. You will be responsible for building and training AI models.`}
    />
  );
}

export function DocQACard() {
  return (
    <Container p="sm">
      <Text pb="sm" fz="lg" fw={500}>
        Upload a document and ask a question
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Upload any document and pose a question; the system intelligently extracts text, crafts Q&A
        pairs, and leverages semantic search algorithms to deliver the most relevant answer to your
        query.
      </Text>

      <Text size="md" fw={500}>
        Try it out!
      </Text>
      <Text size="sm" c="dimmed">
        Upload your Document and ask a question to get started.
      </Text>

      <Card shadow="sm" withBorder={false}>
        <Stack pt="lg">
          <DocUpload />
          <DocQ />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Answer Question
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
