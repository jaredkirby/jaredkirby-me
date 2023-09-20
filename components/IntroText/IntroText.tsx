import { Text, Center } from '@mantine/core';

export function IntroText() {
  return (
    <>
      <Center>
        <Text size="xl" fw={700}>
          Hi, I'm Jared! 😄
        </Text>
      </Center>
      <Text size="md">
        <strong>Role:</strong> I'm the{' '}
        <span style={{ fontWeight: 500, color: '#ffd166' }}>Director of Data Services</span> at a
        California-based agency, managing everything from data analytics to client strategy.
      </Text>
      <Text size="md">
        <strong>Skills:</strong> Expert in programming, machine learning, and audio engineering.
        Passionate about{' '}
        <span style={{ fontWeight: 500, color: '#ef476f' }}>learning new things </span> and
        building. 👉
      </Text>
      <Text size="md">
        <strong>Interests:</strong> Focused on{' '}
        <span style={{ fontWeight: 500, color: '#fb5607' }}>Generative AI</span>,{' '}
        <span style={{ fontWeight: 500, color: '#3a86ff' }}>Machine Learning</span>, and{' '}
        <span style={{ fontWeight: 500, color: '#8338ec' }}>Language Models</span>.
      </Text>
      <Text size="md">
        <strong>Achievements:</strong> Created a data management system revolutionizing our
        services.
      </Text>
      <Text size="md">
        <strong>Hobbies:</strong> Off-duty, I'm restoring my '78 Fiat, playing music, or enjoying
        sports like F1 and baseball.
      </Text>
      <Text size="md">
        <span style={{ fontWeight: 500, color: '#ffd166' }}>Let's Connect! </span>👋
      </Text>
    </>
  );
}
