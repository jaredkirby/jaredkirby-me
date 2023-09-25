import React from 'react';

interface Link {
  label: string;
  link: string;
}

interface LinksGroupProps {
  label: string;
  icon: React.ElementType;
  initiallyOpened?: boolean;
  links?: Link[];
}

export const LinksGroup: React.FC<LinksGroupProps> = ({ label, icon, initiallyOpened = false, links = [] }) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpened);
  const Icon = icon;

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        <Icon />
        <span>{label}</span>
      </button>
      {isOpen && links.map((link) => (
        <a key={link.label} href={link.link}>
          {link.label}
        </a>
      ))}
    </div>
  );
};