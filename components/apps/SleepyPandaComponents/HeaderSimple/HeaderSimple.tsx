'use client';

import { Container, Flex } from '@mantine/core';
import classes from './HeaderSimple.module.css';
import { ActionToggle } from '../ActionToggle/ColorModeToggle';
import { ActionIconSocials } from '../ActionIconSocial/ActionIconSocial';

export function HeaderSimple() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Flex align="center" justify="flex-start" gap="md">
          <ActionIconSocials />
        </Flex>
        <ActionToggle />
      </Container>
    </header>
  );
}
