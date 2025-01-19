import React from 'react';
import { Button } from '../Button';

type Props = {
  onPageChange: () => void;
  isDisabled: boolean;
  direction: 'prev' | 'next';
};

export const PaginationButton: React.FC<Props> = ({
  onPageChange,
  isDisabled,
  direction,
}) => {
  return (
    <Button
      onClick={onPageChange}
      isDisabled={isDisabled}
      direction={direction}
    />
  );
};
