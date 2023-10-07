import { Text, Center, Space } from '@mantine/core';

export function IntroText() {
  const yellowColor = '#E7E792';
  const redColor = '#B5716E';
  const greenColor = '#A4DA95';
  const blueColor = '#9ACFE5';
  const purpleColor = '#8677D3';
  const pinkColor = '#C266AF';

  return (
    <>
      <Center>
        <Text size="xl" fw={700}>
          About Me
        </Text>
      </Center>
      <Space h="lg" />
      <Text size="md">
        <strong>Role:</strong> I'm the{' '}
        <span style={{ fontWeight: 700, color: yellowColor }}>Director of Innovation</span> at a
        California-based media and marketing agency, developing the future for CPG brands.
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Skills:</strong> Programming, data analytics, business operations, and marketing strategy.
        Passionate about{' '}
        <span style={{ fontWeight: 700, color: pinkColor }}>learning new things </span> and
        <span style={{ fontWeight: 700, color: purpleColor }}> building</span>.
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Interests:</strong> Focused on{' '}
        <span style={{ fontWeight: 700, color: redColor }}>AI Engineering</span>,{' '}
        <span style={{ fontWeight: 700, color: greenColor }}>Marketing Intelligence</span>, and{' '}
        <span style={{ fontWeight: 700, color: purpleColor }}>Retrieval Augmented Generation</span>.
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Hobbies:</strong> Off-duty, I'm restoring my '78 Fiat, building Lego with my boys, or enjoying
        sports like F1 and baseball.
      </Text>
      <Space h="lg" />
      <Center>
        <Text size="md">
          <span style={{ fontWeight: 700, color: blueColor }}>Let's Connect! </span>👋
        </Text>
      </Center>
    </>
  );
}