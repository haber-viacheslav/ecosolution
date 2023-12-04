import React, { ReactNode, useState } from 'react';

import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/Accordion/Accordion.styled';

import Plus from '~/svg/add.svg';
import Minus from '~/svg/minus.svg';

interface AccordionItemProps {
  isOpen: boolean;
  children: ReactNode;
}

const AccordionItemContent: React.FC<AccordionItemProps> = ({
  isOpen,
  children,
}) => {
  return (
    <AccordionContent style={{ display: isOpen ? 'block' : 'none' }}>
      {children}
    </AccordionContent>
  );
};

interface AccordionProps {
  items: { id: number; title: string; content: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const accordionClickHandle = (id: number) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <AccordionContainer>
      {items.map((accordionItem) => (
        <AccordionItem key={accordionItem.id}>
          <AccordionHeader
            aria-expanded={activeAccordion === accordionItem.id}
            onClick={() => accordionClickHandle(accordionItem.id)}
          >
            {activeAccordion === accordionItem.id ? (
              <Minus width={16} height={16} />
            ) : (
              <Plus width={16} height={16} />
            )}
            {accordionItem.title}
          </AccordionHeader>
          <AccordionItemContent isOpen={activeAccordion === accordionItem.id}>
            <p>{accordionItem.content}</p>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};
