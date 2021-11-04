import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './app-header.css';

interface IProps {
  toDo: number;
  done: number;
}

const AppHeader: FC<IProps> = ({ toDo, done }) => {
  const { t } = useTranslation();
  return (
    <div className="app-header d-flex">
      <h1>{t('Todo List')}</h1>
      <h2>
        {toDo} {t('more to do')}, {done} {t('done')}
      </h2>
    </div>
  );
};

export default AppHeader;
