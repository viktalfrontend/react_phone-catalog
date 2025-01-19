import React from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';

import { PaginationButton } from '../PaginationButton';

type Props = {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  currentPage,
  onPageChange,
}) => {
  const createNumberPages = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (total <= 5) {
      for (let i = 2; i < total; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 3) {
      pages.push(2, 3, '...');
    } else if (currentPage > 3 && currentPage < total - 2) {
      pages.push('...', currentPage, '...');
    } else {
      pages.push('...', total - 2, total - 1);
    }

    pages.push(total);

    return pages;
  };

  return (
    <div className={styles.container}>
      <PaginationButton
        onPageChange={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        direction="prev"
      />
      <ul className={styles.pagination}>
        {createNumberPages().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className={styles.dots}>...</span>
            ) : (
              <a
                className={cn(styles.pageLlink, {
                  [styles.active]: currentPage === page,
                })}
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onPageChange(page as number);
                }}
              >
                {page}
              </a>
            )}
          </li>
        ))}
      </ul>
      <PaginationButton
        onPageChange={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === total}
        direction="next"
      />
    </div>
  );
};
