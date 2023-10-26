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
        <strong>Skills:</strong> <br />
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
        - Image to Text:<span style={{ fontWeight: 700, color: purpleColor }}> Store Shelf Analysis</span> <br />
        - Speech to Text:<span style={{ fontWeight: 700, color: blueColor }}> AI-Accelerated Learning</span> <br />
        - Memory Models:<span style={{ fontWeight: 700, color: pinkColor }}> Elderly Care/Companion</span> <br />
      </Text>
      <Space h="sm" />
      <Center>
        <Text size="md">
          <span style={{ fontWeight: 700, color: blueColor }}>Let's Connect! </span>👋
        </Text>
      </Center>
    </>
  );
}