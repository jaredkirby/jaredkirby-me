'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { JobToolCard } from '../../AppProjects/ResumePilot/JobToolCard';
import { DocQACard } from '../../AppProjects/pdfPilot/DocQACard';
import { DOSToolCard } from '../../AppProjects/RolePilot/DOSToolCard';

export function ProjectGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <JobToolCard />
        <DocQACard />
        <DOSToolCard />
      </SimpleGrid>
    </Container>
  );
}
