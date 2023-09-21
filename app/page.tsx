import { Center, Text } from '@mantine/core';

import { JaredGrid } from '@/components/PageGrids/JaredGrid';
import { ProjectGrid } from '@/components/PageGrids/ProjectGrid';

export default function HomePage() {
  return (
    <>
      <JaredGrid />
      <Center>
        <Text size="xl" fw={700}>
          Projects
        </Text>
      </Center>
      <ProjectGrid />
    </>
  );
}
