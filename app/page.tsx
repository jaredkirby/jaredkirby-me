import { Text, Space, Container } from '@mantine/core';
import { JaredGrid } from '@/components/HomePage/PageGrids/JaredGrid';
import { MainProjectCard } from '@/components/AppProjects/MainProjectCard';

export default function HomePage() {
  return (
    <Container size="xl">
      <Space h="lg" />
      <JaredGrid />
      <Space h="md" />
      <Text ta="center" fw={700} size="xl" >
        Projects
      </Text>
      <Space h="lg" />
      <MainProjectCard />
    </Container>
  );
}
