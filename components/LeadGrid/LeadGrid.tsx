'use client';

import { Container, Grid, SimpleGrid, Image, Stack, Center, Text, Space } from '@mantine/core';
import { IntroText } from '../IntroText/IntroText';
import { ToolsList } from '../ToolsList/ToolsList';

export function LeadGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Stack>
          <Center>
            <Image
              radius="md"
              h={220}
              w={220}
              fit="contain"
              src="/ai_jared_1000.png"
              alt="Jared Kirby"
            />
          </Center>
          <IntroText />
        </Stack>
        <Grid gutter="md">
          <Grid.Col>
            <Center>
              <Text size="xl" fw={700}>
                Projects
              </Text>
            </Center>
            <Space h="lg" />
            <ToolsList />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
