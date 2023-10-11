import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';

import React from 'react';
import { MantineProvider, ColorSchemeScript, Space, Flex } from '@mantine/core';
import type { Metadata } from 'next';
import { theme } from '../theme';
import { HeaderSimple } from '../components/HomePage/Header/HeaderSimple';
import { Footer } from '@/components/HomePage/Footer/Footer';

export const metadata: Metadata = {
  title: 'Jared Kirby Portfolio Website',
  description: 'This is a place to showcase my work and projects.',
  keywords: ['Jared', 'Kirby', 'Jared Kirby', 'California', 'AI Engineer', 'Kirby Meets Audio']
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSimple />
          {children}
          <Space h="xl" />
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
