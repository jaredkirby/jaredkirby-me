'use client';

import { Container, Flex, Space } from '@mantine/core';
import classes from './Footer.module.css';
import { ColorMode } from '../ColorToggle/ColorModeToggle';

export function Footer() {
  return (
    <footer className={classes.footer}>
        <Flex justify="flex-end" gap="md">
          <ColorMode />
          <Space w={5} />
        </Flex>
    </footer>
  );
}
