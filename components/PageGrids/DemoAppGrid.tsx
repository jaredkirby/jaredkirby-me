'use client';

import { Container, SimpleGrid, Card } from '@mantine/core';
import { AppNav } from '@/components/DemoApp/AppNav';

export function DemoAppGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1}} spacing="md">
        <Card shadow="md" padding="md" radius="lg" withBorder>
          <AppNav />
        </Card>
      </SimpleGrid>
    </Container>
  );
}
