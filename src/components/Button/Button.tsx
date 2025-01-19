import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

type Props = {
  onClick: () => void;
  isDisabled?: boolean;
  direction: 'next' | 'prev';
  isLarge?: boolean;
};

export const Button: React.FC<Props> = ({
  onClick,
  isDisabled = false,
  direction,
  isLarge = false,
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.large]: isLarge,
        [styles.next]: direction === 'next',
        [styles.prev]: direction === 'prev',
        [styles.disabled]: isDisabled,
      })}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
};
