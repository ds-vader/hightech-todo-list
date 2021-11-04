import React, { FC } from 'react';
import { observer } from 'mobx-react';
import i18n from '../../i18n';
import { ButtonGroup, Button } from 'react-bootstrap';

import './lang-change.css';

const LangChange: FC = () => {
  const changeLanguage = (lang: langTypes) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ButtonGroup
      size="sm"
      className="m-3"
      style={{ position: 'fixed', left: 0, bottom: 0 }}
      aria-label="Basic example"
    >
      <Button
        onClick={() => changeLanguage('en')}
        variant="secondary"
        className="lang-button"
      >
        ENG
      </Button>
      <Button
        onClick={() => changeLanguage('ua')}
        variant="secondary"
        className="lang-button"
      >
        UA
      </Button>
    </ButtonGroup>
  );
};

export default observer(LangChange);
