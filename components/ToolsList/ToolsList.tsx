import { Group, Text, Accordion, rem } from '@mantine/core';
import { IconBriefcase, IconBrain, IconChartHistogram  } from '@tabler/icons-react';

const charactersList = [
  {
    id: 'recruit',
    image: IconBriefcase,
    label: 'RecruitPilot',
    description: 'A set of AI tools to automate resume scoring and generate interview questions.',
    content:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'smart',
    image: IconBrain,
    label: 'SmartPilot',
    description: "A Python program leveraging OpenAI's language models to generate, analyze, and select the best answer to a given question.",
    content:
      "SmartPilot is a Python program that generates, analyzes, and selects the best answer to a given question. It leverages the power of OpenAI's language model and a series of prompt-engineered AI models to provide high-quality, reliable, and accurate responses.",
  },

  {
    id: 'stats',
    image: IconChartHistogram,
    label: 'StatsPilot',
    description: 'Stats Class Survival Tools',
    content:
      'StatsPilot is a collection of tools designed to assist with statistics class survival. Whether you need help answering an exam question or understanding a statistics concept, StatsPilot has got you covered. This README file provides an overview of the code and its functionalities.',
  },
];

interface AccordionLabelProps {
  label: string;
  description: string;
}

function AccordionLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function ToolsList() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control icon={<item.image style={{ color: 'var(--mantine-color-teal-filled', width: rem(50), height: rem(50) }}/>}>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="filled">
      {items}
    </Accordion>
  );
}
