import React, { FC, useMemo } from 'react';
import { Column } from 'react-table';

import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

import { useStore } from '../../use-stores';
import Table from './table';
import './archive.css';

const Archive: FC = () => {
  const { todoStore } = useStore();
  const { t } = useTranslation();

  const headers = {
    todos: t('Todos'),
    important: t('Important'),
    done: t('Done'),
    startDate: t('Start date'),
    endDate: t('End date'),
    label: t('Label'),
  };

  const columns = useMemo<Column<{ important: boolean; done: boolean }>[]>(
    () => [
      {
        Header: headers.todos,
        columns: [
          {
            Header: headers.label,
            accessor: 'label',
          },
          {
            id: 'important',
            Header: headers.important,
            accessor: (d) => d.important.toString(),
          },
          {
            id: 'done',
            Header: headers.done,
            accessor: (d) => d.done.toString(),
          },
          {
            Header: headers.startDate,
            accessor: 'startDate',
          },
          {
            Header: headers.endDate,
            accessor: 'endDate',
          },
        ],
      },
    ],
    [
      headers.done,
      headers.endDate,
      headers.important,
      headers.label,
      headers.startDate,
      headers.todos,
    ]
  );

  return (
    <div className="archive-main">
      <Table columns={columns} data={todoStore.archiveItems} />
    </div>
  );
};

export default observer(Archive);
