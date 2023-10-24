import { Text, Center, Space } from '@mantine/core';
import classes from './IntroText.module.css';

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
        <Text size='xl' fw={700}>
          About Me
        </Text>
      </Center>
      <Space h="sm" />
      <Text className={classes.text}>
        <strong>Role:</strong> I'm the{' '}
        <span style={{ fontWeight: 700, color: yellowColor }}>Director of Innovation</span> at CEMM, developing the future for CPG brands.
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
        <strong>Focused on:</strong> <br />
        🛠️ - <span style={{ fontWeight: 700, color: redColor }}>AI Engineering/Operations</span> <br />
        📣 - <span style={{ fontWeight: 700, color: greenColor }}>Marketing Intelligence</span> <br />
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Projects:</strong> <br />
        - Applied Image to Text: CPG Shelf Analysis <br />
        - Applied Speech to Text: AI-Accelerated Learning <br />
        - Long Term Memory Models: Elderly Care/Companion <br />
      </Text>
      <Space h="sm" />
      <Text size="md">
        <strong>Hobbies:</strong> Off-duty, I'm restoring my '78 Fiat, building Lego with my boys, or enjoying F1 and baseball.
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