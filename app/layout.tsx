import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';

import React from 'react';
import { MantineProvider, ColorSchemeScript, Space } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSimple } from '../components/HomePage/Header/HeaderSimple';

export const metadata = {
  title: 'Jared Kirby Portfolio Website',
  description: 'This is a place to showcase my work and projects.',
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
        </MantineProvider>
      </body>
    </html>
  );
}
