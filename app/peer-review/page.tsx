import {  MantineProvider, createTheme, Center, Text, Container, Card } from '@mantine/core';

import { Cool_PeerReviewInput } from '@/components/Input/CoolTextArea';

export default function PeerReviewApp() {
  return (
    <>
    <Container fluid h={500} bg="var(--mantine-color-blue-light)">
        <Cool_PeerReviewInput />
    </Container>
    </>
  );
}
