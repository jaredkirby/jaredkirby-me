'use client';

import {
  Card,
  Image,
  Text,
  Button,
  Textarea,
  Stack,
  Tooltip,
  rem,
  Divider,
  Container,
  Grid,
} from '@mantine/core';
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
    <Container p="sm">
      <Text pb="xs" fz="lg" fw={500}>
        Write a resume that gets you hired
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Upload your resume and the job description you're targeting; this tool conducts a nuanced
        analysis of both. It then crafts an optimized, job-targeted resume, designed to increase
        your chances of landing the job.
      </Text>

      <Text size="md" fw={500}>
        Try it out!
      </Text>
      <Text size="sm" c="dimmed">
        Upload your resume and job description to get started.
      </Text>

      <Card shadow="sm" radius="md" withBorder={false}>
        <Stack pt="lg">
          <ResumeUpload />
          <JobDescription />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Generate Resume
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
