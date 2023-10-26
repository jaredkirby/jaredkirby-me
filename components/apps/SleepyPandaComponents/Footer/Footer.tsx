'use client';

import { Container, Flex, Text, Center } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="md">
        <Center>
          <Text size="sm">
            &copy; {new Date().getFullYear()} 🛠️ Jared Kirby. All rights reserved.
          </Text>
        </Center>
      </Container>
    </footer>
  );
}
