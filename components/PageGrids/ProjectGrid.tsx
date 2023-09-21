'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { BaseCard } from '../ProjectCards/BaseCard';

export function ProjectGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <BaseCard />
      </SimpleGrid>
    </Container>
  );
}
