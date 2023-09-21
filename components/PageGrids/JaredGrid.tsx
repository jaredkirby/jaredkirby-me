'use client';

import { Container, SimpleGrid, Image, Stack, Text, Card, Space } from '@mantine/core';
import { IntroText } from '../IntroText/IntroText';

export function JaredGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card shadow="md" padding="xl" radius="md" withBorder>
          <Stack align="center">
            <Space h={10} />
            <Image h={220} w={220} src="/ai_jared_1000.png" alt="Jared Kirby" />
            <Text size="xl" fw={700}>
              Hi, I'm Jared! 😄
            </Text>
            <Text size="md" fw={500}>
              Father, Husband, Data Nerd, and AI Enthusiast
            </Text>
          </Stack>
        </Card>
        <Card shadow="md" padding="xl" radius="md" withBorder>
          <IntroText />
        </Card>
      </SimpleGrid>
    </Container>
  );
}
