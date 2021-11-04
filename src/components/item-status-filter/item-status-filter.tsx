import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  filter: filterType;
  onFilterChange: (filter: filterType) => void;
}
type Buttons = {
  name: filterType;
  label: string;
};

const ItemStatusFilter: FC<IProps> = ({ filter, onFilterChange }) => {
  const { t } = useTranslation();

  const filterButtons: Array<Buttons> = [
    { name: 'all', label: t('All') },
    { name: 'active', label: t('Active') },
    { name: 'done', label: t('Done') },
  ];

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button
        key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
