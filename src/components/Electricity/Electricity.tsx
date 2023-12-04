import React, { useEffect, useState } from 'react';

import { Container } from '@/components/Container/Container';
import { formatNumber } from '@/helpers/formatNumber';

import {
  Enumerator,
  EnumeratorUnits,
  EnumeratorValue,
  StyledElectricityTitle,
  StyledSection,
} from './Electricity.styled';

export const Electricity = () => {
  const [electricityCount, setElectricityCount] = useState(1134147814);

  useEffect(() => {
    const updateCounter = () => {
      setElectricityCount((prevCount) => prevCount + 1);
    };

    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <StyledSection>
      <Container>
        <StyledElectricityTitle>
          Electricity we produced for all time
        </StyledElectricityTitle>
        <Enumerator>
          <EnumeratorValue>{formatNumber(electricityCount)}</EnumeratorValue>
          <EnumeratorUnits>kWh</EnumeratorUnits>
        </Enumerator>
      </Container>
    </StyledSection>
  );
};
