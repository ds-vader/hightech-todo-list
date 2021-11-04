import React, { useState, FC, ChangeEvent } from 'react';

import { useTranslation } from 'react-i18next';

import './search-panel.css';

interface IProps {
  onSearchChange: (text: string) => void;
}

const SearchPanel: FC<IProps> = ({ onSearchChange }) => {
  const { t } = useTranslation();

  const [term, setTerm] = useState<string>('');

  const onTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={t('type to search')}
      value={term}
      onChange={onTermChange}
    />
  );
};

export default SearchPanel;
