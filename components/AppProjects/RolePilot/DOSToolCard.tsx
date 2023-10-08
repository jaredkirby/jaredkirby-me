'use client';

import { Card, Text, Button, Textarea, Stack, Tooltip, rem, Container } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function JobDescription() {
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
      size="md"
      radius="md"
      rightSection={rightSection}
      autosize={true}
      label="Task Description"
      placeholder={`YouTube video writer and editor for a DIY Entrepreneurs focused channel.`}
    />
  );
}

export function DOSToolCard() {
  return (
    <Container p="sm">
      <Text pb="xs" fz="lg" fw={500}>
        Give ChatGPT a persona
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Tools like ChatGPT can benefit from a well defined persona specific to desired outcome. This
        tool will help you define the best persona for your task.
      </Text>
      <Card shadow="sm" withBorder={false}>
        <Stack>
          <JobDescription />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Generate Resume
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
