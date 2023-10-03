import { Center, Text, Container, Card } from '@mantine/core';

import { JaredGrid } from '@/components/PageGrids/JaredGrid';
import { ProjectGrid } from '@/components/PageGrids/ProjectGrid';
import { MainProjectCard } from '@/components/MainProjectCard/MainProjectCard';

export default function HomePage() {
  return (
    <>
      <JaredGrid />
      <Center>
        <Text size="xl" fw={700}>
          Projects
        </Text>
      </Center>
      <MainProjectCard />
    </>
  );
}
