'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { JobToolCard } from '../ProjectCards/JobToolCard';
import { DocQACard } from '../ProjectCards/DocQACard';

export function ProjectGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <JobToolCard />
        <DocQACard />
      </SimpleGrid>
    </Container>
  );
}
