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
        <span style={{ fontWeight: 500, color: yellowColor }}>Director of Data Services</span> at a
        California-based agency, managing everything from data analytics to client strategy.
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Skills:</strong> Expert in programming, machine learning, and audio engineering.
        Passionate about{' '}
        <span style={{ fontWeight: 500, color: pinkColor }}>learning new things </span> and
        building. 👉
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Interests:</strong> Focused on{' '}
        <span style={{ fontWeight: 500, color: redColor }}>Generative AI</span>,{' '}
        <span style={{ fontWeight: 500, color: greenColor }}>Machine Learning</span>, and{' '}
        <span style={{ fontWeight: 500, color: purpleColor }}>Language Models</span>.
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Hobbies:</strong> Off-duty, I'm restoring my '78 Fiat, playing music, or enjoying
        sports like F1 and baseball.
      </Text>
      <Space h="lg" />
      <Center>
        <Text size="md">
          <span style={{ fontWeight: 500, color: blueColor }}>Let's Connect! </span>👋
        </Text>
      </Center>
    </>
  );
}

