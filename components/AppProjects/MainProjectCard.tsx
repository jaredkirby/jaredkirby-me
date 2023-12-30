'use client';
import { Card, Tabs, rem, Container } from '@mantine/core';
import { DocQACard } from './pdfPilot/DocQACard';
import { DOSToolCard } from './RolePilot/DOSToolCard';
import { JobToolCard } from './ResumePilot/JobToolCard';
import { IconBriefcase, IconFileSearch, IconUserCheck, IconAlarmSnooze } from '@tabler/icons-react';
import classes from './MainProjectCard.module.css';
import { SleepyPandaApp } from './SleepyPanda/HomeApp/HomeApp';

export function MainProjectCard() {
  const iconStyle = { width: rem(15), height: rem(15) };

  return (
    <Container size="md">
      <Card shadow="md" padding="md" radius="lg" className={classes.card}>
        <Tabs color="teal" defaultValue="SleepyPanda">
          <Tabs.List grow justify="center">
            <Tabs.Tab value="SleepyPanda" leftSection={<IconAlarmSnooze style={iconStyle} />}>
              SleepyPanda
            </Tabs.Tab>
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

          <Tabs.Panel value="SleepyPanda">
            <SleepyPandaApp />
          </Tabs.Panel>
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
