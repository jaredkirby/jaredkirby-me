'use client';

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Textarea,
  Stack,
  Tooltip,
  Center,
  rem,
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ResumeUpload } from '../FileInput/DropzoneButton';

function JobDescription() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
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
      label="Input Job Description"
      placeholder={`AI Engineer\nJob Description: We are looking for a AI Engineer to join our team. You will be responsible for building and training AI models.`}
      style={{ whiteSpace: 'pre-line' }}
    />
  );
}

export function BaseCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src="/JobPilotHero.png" height={125} alt="JobPilot" />
      </Card.Section>

      <Text py="sm" fz="lg" fw={500}>
        JobPilot
      </Text>
      <Stack>
        <Text size="sm" c="dimmed">
          This tool is a job resume builder that writes your resume for you. It uses AI to analyze
          your resume and job description, then writes your resume for you.
        </Text>
      </Stack>
      <Card>
        <Stack>
          <JobDescription />
          <ResumeUpload />
          <Button variant="light" color="teal" fullWidth radius="md">
            Rewrite Resume
          </Button>
        </Stack>
      </Card>
    </Card>
  );
}
