'use client'

import { ActionIcon, Group } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconBrandX,
} from '@tabler/icons-react';
import classes from './ActionIcon.module.css';

export function ActionIconSocial() {
  const socialIcons = [
    {
      url: 'https://github.com/jaredkirby',
      icon: <IconBrandGithub className={`${classes.icon} ${classes.dark}`} stroke={1.5} />,
    },
    {
      url: 'https://www.linkedin.com/in/jared-kirby',
      icon: <IconBrandLinkedin className={`${classes.icon} ${classes.dark}`} stroke={1.5} />,
    },
    {
      url: 'https://www.youtube.com/@KirbyMeetsAudio',
      icon: <IconBrandYoutube className={`${classes.icon} ${classes.dark}`} stroke={1.5} />,
    },
    {
      url: 'https://twitter.com/Kirby_',
      icon: <IconBrandX className={`${classes.icon} ${classes.dark}`} stroke={1.5} />,
    },
    {
      url: 'mailto:JPeterKirby@gmail.com',
      icon: <IconMail className={`${classes.icon} ${classes.dark}`} stroke={1.5} />,
    },
  ];

  return (
    <Group justify="flex-end" gap={5}>
      {socialIcons.map(({ url, icon }) => (
        <ActionIcon
          key={url}
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          variant="default"
          size="lg"
          aria-label={url}
        >
          {icon}
        </ActionIcon>
      ))}
    </Group>
  );
}