'use client';

import { Container, Group, Text } from '@mantine/core';
import classes from './HeaderSimple.module.css';
import { ActionToggle } from '../ActionToggle/ColorModeToggle';
import { ActionIconSocials } from '../ActionIconSocial/ActionIconSocial';

import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';


export function HeaderSimple() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text size="xl" fw={700} c="teal">
          Jared Kirby
        </Text>

        <Group>
          <ActionIconSocials />
          <ActionToggle />
        </Group>
      </Container>
    </header>
  );
}
