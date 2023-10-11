'use client';

import { Container, Center, Text } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="md">
        <Center>
          <Text size="sm" c="dimmed">
            &copy; {new Date().getFullYear()} 🛠️ Jared Kirby. All rights reserved.
          </Text>
        </Center>
      </Container>
    </footer>
  );
}
