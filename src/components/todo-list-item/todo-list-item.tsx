import React, { FC } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { convertMS } from '../../helpers/convertMS';
import './todo-list-item.css';

interface IProps {
  label: string;
  onDelete: () => void;
  onToggleImportant: () => void;
  onToggleDone: () => void;
  done: boolean;
  important: boolean;
  startDate: string;
  endDate: string;
}

const TodoListItem: FC<IProps> = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleDone,
  done,
  important,
  startDate,
  endDate,
}) => {
  const { t } = useTranslation();
  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }
  const diff = convertMS(moment(endDate).diff(moment(startDate)));

  const formatDiff =
    diff.day +
    t('day(s)') +
    ' ' +
    diff.hour +
    t('hour(s)') +
    ' ' +
    diff.minute +
    t('minute(s)');

  const timeLeft =
    endDate === '' ? (
      ''
    ) : (
      <span className="todo-list-item-timeline">
        {t('left time')}: {formatDiff}{' '}
      </span>
    );

  return (
    <>
      <span className={classNames}>
        <span className={'todo-list-item-label'} onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
        {/* <button
          type="button"
          className="btn btn-outline-secondary btn-sm float-right"
          onClick={onEdit}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button> */}
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </span>
      <br />
      {timeLeft}
    </>
  );
};

export default TodoListItem;
