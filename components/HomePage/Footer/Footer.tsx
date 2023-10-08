'use client';

import { Container, Flex, Space } from '@mantine/core';
import classes from './Footer.module.css';
import { ColorMode } from '../ColorToggle/ColorModeToggle';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container >
        <Flex justify="flex-end">
          <ColorMode />
        </Flex>
        <Space h="lg" />
      </Container>
    </footer>
  );
}
