'use client';

import { Card, Image, Text, Button, Textarea, Stack, Tooltip, rem, Divider } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ResumeUpload } from '../FileInput/ResumeUpload';
import classes from './JobToolCard.module.css';

function DocUpload() {
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
    <Card shadow="md" padding="md" radius="lg" withBorder>
      <Card.Section>
        <Image src="/DocPilotHero.png" height={125} alt="DocPilot" />
      </Card.Section>

      <Text pt="md" fz="xl" fw={700}>
        DocPilot
      </Text>
      <Text size="md" c="dimmed" pb="md">
        This tool enables you to upload a document and ask a question about it. It will extract the text from your document, create question answer pairs based on the text, then embed those pairs into a vector space. You can then ask a question and the model will semantically search the vector to return the most relevant answer.
      </Text>
      <Card shadow="sm" withBorder={false} className={classes.card}>
        <Text size="md" fw={500}>
          Try it out!
        </Text>
        <Text size="sm" c="dimmed">
          Upload your Document and ask a question to get started.
        </Text>
        <Stack pt="lg">
          <ResumeUpload />
          <DocUpload />
          <Button variant="filled" color="rgba(59, 168, 94, 0.5)" fullWidth radius="md">
            Answer Question
          </Button>
        </Stack>
      </Card>
    </Card>
  );
}
