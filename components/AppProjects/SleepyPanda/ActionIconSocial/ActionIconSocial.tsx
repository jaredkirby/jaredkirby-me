'use client';

import cx from 'clsx';
import { ActionIcon, Group } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconBrandTwitter,
} from '@tabler/icons-react';
import classes from './ActionIcon.module.css';

const socialLinks = [
  {
    url: 'https://github.com/jaredkirby',
    icon: IconBrandGithub,
    label: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/jared-kirby',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
  },
  {
    url: 'https://www.youtube.com/@KirbyMeetsAudio',
    icon: IconBrandYoutube,
    label: 'YouTube',
  },
  {
    url: 'https://twitter.com/Kirby_',
    icon: IconBrandTwitter,
    label: 'Twitter',
  },
  {
    url: 'mailto:JPeterKirby@gmail.com',
    icon: IconMail,
    label: 'Email',
  },
];

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export function ActionIconSocials() {
  return (
    <Group justify="flex-end" gap={5}>
      {socialLinks.map(({ url, icon: Icon, label }) => (
        <ActionIcon
          key={url}
          onClick={() => openInNewTab(url)}
          variant="default"
          size="lg"
          aria-label={label}
        >
          <Icon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      ))}
    </Group>
  );
}
