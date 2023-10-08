'use client';

import { Container, Flex, Space } from '@mantine/core';
import classes from './HeaderSimple.module.css';
import { ActionToggle } from '../ColorToggle/ColorModeToggle';
import { ActionIconSocial } from '../ActionIconSocial/ActionIconSocial';


export function HeaderSimple() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Flex align="center" justify="flex-start" gap="md">
          <Space w="sm" />
          <ActionIconSocial />
        </Flex>
        <Flex align="center" justify="flex-end" gap="md">
          <ActionToggle />
          <Space w="sm" />
        </Flex>
      </Container>
    </header>
  );
}
