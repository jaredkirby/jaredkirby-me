'use client';

import { Flex, Space } from '@mantine/core';
import classes from './HeaderSimple.module.css';
import { ColorMode } from '../ColorToggle/ColorModeToggle';


export function HeaderSimple() {
  return (
    <header className={classes.header}>
        <Space h={10} />
        <Flex justify="flex-end" gap="md">
          <ColorMode />
          <Space w={1} />
        </Flex>
    </header>
  );
}
