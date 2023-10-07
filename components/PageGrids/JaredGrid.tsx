'use client';

import { Container, SimpleGrid, Image, Stack, Text, Card, Space } from '@mantine/core';
import { IntroText } from '../IntroText/IntroText';
import classes from './JaredGridCard.module.css';

export function JaredGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card shadow="md" padding="xl" radius="xl" className={classes.card}>
          <Stack align="center">
            <Space h={10} />
            <Image h={220} w={220} src="/ai_jared_1000.png" alt="Jared Kirby" />
            <Text size="xl" fw={700}>
              Hi, I'm Jared! 😄
            </Text>
            <Text mt={-10} size="md" fw={500}>
              Husband, Dad, Data Nerd, and AI Enthusiast
            </Text>
          </Stack>
        </Card>
        <Card shadow="md" padding="xl" radius="xl" className={classes.card}>
          <IntroText />
        </Card>
      </SimpleGrid>
    </Container>
  );
}
