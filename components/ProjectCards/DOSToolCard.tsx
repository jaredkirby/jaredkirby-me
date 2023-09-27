'use client';

import { Card, Image, Text, Button, Textarea, Stack, Tooltip, rem, Divider } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './JobToolCard.module.css';

function JobDescription() {
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
      label="Task Description"
      placeholder={`YouTube video writer and editor for a DIY Entrepreneurs focused channel.`}
    />
  );
}

export function DOSToolCard() {
  return (
    <Card shadow="md" padding="md" radius="lg">
      <Card.Section>
        <Image src="/JobPilotHero.png" height={125} alt="RolePilot" />
      </Card.Section>

      <Text pt="md" pb="xs" fz="xl" fw={700}>
        RolePilot
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Tools like ChatGPT can benefit from a well defined persona specific to desired outcome. This
        tool will help you define the best persona for your task.
      </Text>
      <Card shadow="sm" withBorder={false} className={classes.card}>
        <Text size="md" fw={500}>
          Try it out!
        </Text>
        <Text size="sm" c="dimmed">
          Enter your task to get started.
        </Text>
        <Stack pt="lg">
          <JobDescription />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Generate Resume
          </Button>
        </Stack>
      </Card>
    </Card>
  );
}
