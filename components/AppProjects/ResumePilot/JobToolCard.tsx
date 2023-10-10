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
  Container,
  Center,
  Space,
  Flex,
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ResumeUpload } from '../FileInput/ResumeUpload';

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
      minRows={4}
      label="Job Description"
      placeholder={`Job Title: AI Engineer\nJob Description: We are looking for a AI Engineer to join our team. You will be responsible for building and deploying AI applications that utilize foundation or local models via API.`}
    />
  );
}

export function JobToolCard() {
  return (
    <Container p="sm">
      <Text fz="lg" fw={500}>
        Write a resume that gets you hired
      </Text>
      <Text size="md" c="dimmed" pb="md">
        Upload your resume and the job description you're targeting; this tool conducts a nuanced
        analysis of both. It then crafts an optimized, job-targeted resume, designed to increase
        your chances of landing the job.
      </Text>
      <Space h="md" />
      <Center>
        <Card shadow="md" radius="lg" padding="lg" withBorder bg="--mantine-color-dark-4">
          <Card.Section>
            <Image src="/JobPilotHero.png" alt="JobPilot" height={110} />
          </Card.Section>
          <Text mt={9} size="xl" fw={700}>
            JobPilot
          </Text>
          <Text size="sm" c="dimmed">
            Upload your resume and job description to get started.
          </Text>
          <Space h="md" />
            <ResumeUpload />
            <JobDescription />
            <Space h="md" />
            <Button variant="filled" color="rgba(59, 168, 94, 0.5)" radius="md">
              Generate Resume
            </Button>
        </Card>
      </Center>
    </Container>
  );
}
