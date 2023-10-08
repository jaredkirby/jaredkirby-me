import { Center, Text, Space, Container, Flex } from '@mantine/core';

import { JaredGrid } from '@/components/HomePage/PageGrids/JaredGrid';
import { MainProjectCard } from '@/components/AppProjects/MainProjectCard';

export default function HomePage() {
  return (
    <Container size="xl">
      <Space h="lg" />
      <JaredGrid />
      <Space h="lg" />
      <Text align="center" fw={900} size="xl" >
        Projects
      </Text>
      <Space h="lg" />
      <MainProjectCard />
    </Container>
  );
}
