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

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export function ActionIconGit() {
  return (
    <ActionIcon
      onClick={() => openInNewTab('https://github.com/jaredkirby')}
      variant="default"
      size="lg"
      aria-label="GitHub"
    >
      <IconBrandGithub className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export function ActionIconLinkedIn() {
  return (
    <ActionIcon
      onClick={() => openInNewTab('https://www.linkedin.com/in/jared-kirby')}
      variant="default"
      size="lg"
      aria-label="LinkedIn"
    >
      <IconBrandLinkedin className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export function ActionIconYouTube() {
  return (
    <ActionIcon
      onClick={() => openInNewTab('https://www.youtube.com/@KirbyMeetsAudio')}
      variant="default"
      size="lg"
      aria-label="YouTube"
    >
      <IconBrandYoutube className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export function ActionIconTwitter() {
  return (
    <ActionIcon
      onClick={() => openInNewTab('https://twitter.com/Kirby_')}
      variant="default"
      size="lg"
      aria-label="Twitter"
    >
      <IconBrandTwitter className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export function ActionIconMail() {
  return (
    <ActionIcon
      onClick={() => openInNewTab('mailto:JPeterKirby@gmail.com')}
      variant="default"
      size="lg"
      aria-label="Email"
    >
      <IconMail className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export function ActionIconSocials() {
  return (
    <Group justify="flex-end" gap={5}>
      <ActionIconGit />
      <ActionIconTwitter />
      <ActionIconLinkedIn />
      <ActionIconYouTube />
      <ActionIconMail />
    </Group>
  );
}
