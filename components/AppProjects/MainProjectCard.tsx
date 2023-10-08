'use client';

import {
  Card,
  Tabs,
  Image,
  Text,
  Button,
  Textarea,
  Stack,
  Tooltip,
  rem,
  Divider,
  Container,
} from '@mantine/core';
import { DocQACard } from './pdfPilot/DocQACard';
import { DOSToolCard } from './RolePilot/DOSToolCard';
import { JobToolCard } from './ResumePilot/JobToolCard';
import { IconBriefcase, IconFileSearch, IconUserCheck } from '@tabler/icons-react';

export function MainProjectCard() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Container size="sm">
      <Card shadow="md" padding="md" radius="lg">
        <Tabs color="teal" defaultValue="JobPilot">
          <Tabs.List>
            <Tabs.Tab value="JobPilot" leftSection={<IconBriefcase style={iconStyle} />}>
              JobPilot
            </Tabs.Tab>
            <Tabs.Tab value="DocPilot" leftSection={<IconFileSearch style={iconStyle} />}>
              DocPilot
            </Tabs.Tab>
            <Tabs.Tab value="RolePilot" leftSection={<IconUserCheck style={iconStyle} />}>
              RolePilot
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="JobPilot">
            <JobToolCard />
          </Tabs.Panel>
          <Tabs.Panel value="DocPilot">
            <DocQACard />
          </Tabs.Panel>
          <Tabs.Panel value="RolePilot">
            <DOSToolCard />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
}
