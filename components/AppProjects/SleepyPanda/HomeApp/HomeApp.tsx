'use client';

import { Image, Container, Title, Text, List, ThemeIcon, rem, Stack } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import panda_logo from '../../../../public/panda_logo.svg';
import classes from './HomeApp.module.css';
import { PeerReviewApp } from '../Input/TextArea';

export function SleepyPandaApp() {
  return (
    <Container size="md">
      <Stack align="center" justify="flex-start" gap="xl">
        <Image src={panda_logo.src} className={classes.image} mb={-40} mt='xl' />
        <Title className={classes.title}>sleepy panda</Title>
        <Title ta="center" className={classes.subtitle}>
          A helpful <span className={classes.highlight}>peer-discussion</span> response tool
        </Title>
        <PeerReviewApp />
      </Stack>
    </Container>
  );
}
