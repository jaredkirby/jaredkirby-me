'use client';
import { Card, Tabs, rem, Container } from '@mantine/core';
import { IconBriefcase, IconFileSearch, IconUserCheck, IconAlarmSnooze } from '@tabler/icons-react';
import classes from './MainProjectCard.module.css';
import { SleepyPandaApp } from './SleepyPanda/HomeApp/HomeApp';
import { HomeworkHelperApp } from './HomeworkHelper/HomeworkHelper';

export function MainProjectCard() {
  const iconStyle = { width: rem(15), height: rem(15) };

  return (
    <Container size="md">
      <Card shadow="md" padding="md" radius="lg" className={classes.card}>
        <Tabs color="teal" defaultValue="HomeworkHelper">
          <Tabs.List grow justify="center">
            <Tabs.Tab value="HomeworkHelper" leftSection={<IconAlarmSnooze style={iconStyle} />}>
              HomeworkHelper
            </Tabs.Tab>
            <Tabs.Tab value="SleepyPanda" leftSection={<IconBriefcase style={iconStyle} />}>
              SleepyPanda
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="HomeworkHelper">
            <HomeworkHelperApp />
          </Tabs.Panel>
          <Tabs.Panel value="SleepyPanda">
            <SleepyPandaApp />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
}
