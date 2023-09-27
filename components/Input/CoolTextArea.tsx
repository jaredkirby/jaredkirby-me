'use client';

import { Card, Image, Text, Button, Textarea, Stack, Tooltip, rem, Divider } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './CoolTextArea.module.css';

export function Cool_PeerReviewInput() {
  const rightSection = (
    <Tooltip
      label="This tool will analyze the job description for keywords and phrases."
      position="top"
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
      size="lg" 
      radius="md" 
      rightSection={rightSection}
      autosize={true}
      placeholder={`YouTube video writer and editor for a DIY Entrepreneurs focused channel.`}
        classNames={{ input: classes.input}}
    />
  );
}