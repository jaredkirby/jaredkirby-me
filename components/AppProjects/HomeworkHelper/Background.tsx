import { Container, Image} from '@mantine/core';

import center_break_doodle from 'public/center_break_doodle_full.svg';

export function PageBackgroundImage() {
  return (
    <Container size="auto">
      <Image h={400} w="100%" src={center_break_doodle.src} />
    </Container>
  );
}