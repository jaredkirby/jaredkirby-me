'use client';

import { Card, Image, Text, Button, Textarea, Stack, Tooltip, rem, Divider } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ResumeUpload } from '../FileInput/ResumeUpload';
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
      label="Job Description"
      placeholder={`AI Engineer\nJob Description: We are looking for a AI Engineer to join our team. You will be responsible for building and training AI models.`}
    />
  );
}

export function JobToolCard() {
  return (
    <Card shadow="md" padding="md" radius="md" withBorder>
      <Card.Section>
        <Image src="/JobPilotHero.png" height={125} alt="JobPilot" />
      </Card.Section>

      <Text pt="md" fz="xl" fw={700}>
        JobPilot
      </Text>
      <Text size="md" c="dimmed" pb="md">
        This tool is a job resume builder that writes your resume for you. It uses AI to analyze
        your resume and job description, then writes your resume for you.
      </Text>
      <Card shadow="sm" withBorder={false} className={classes.card}>
        <Text size="md" fw={500}>
          Try it out!
        </Text>
        <Text size="sm" c="dimmed">
          Upload your resume and job description to get started.
        </Text>
        <Stack pt="lg">
          <ResumeUpload />
          <JobDescription />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Rewrite Resume
          </Button>
        </Stack>
      </Card>
    </Card>
  );
}
