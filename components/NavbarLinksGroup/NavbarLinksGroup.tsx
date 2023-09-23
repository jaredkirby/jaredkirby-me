import React from 'react';
import { IconType } from '@tabler/icons-react';

interface Link {
  label: string;
  link: string;
}

interface LinksGroupProps {
  label: string;
  icon: IconType;
  initiallyOpened?: boolean;
  links?: Link[];
}

export const LinksGroup: React.FC<LinksGroupProps> = ({ label, icon, initiallyOpened = false, links = [] }) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpened);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={toggleOpen}>
        <icon />
        <span>{label}</span>
      </div>
      {isOpen && links.map((link, index) => (
        <a key={index} href={link.link}>
          {link.label}
        </a>
      ))}
    </div>
  );
};