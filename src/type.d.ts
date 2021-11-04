type ID = string;

type Todo = {
  readonly id: string;
  label: string;
  important: boolean;
  done: boolean;
  startDate: string;
  endDate: string;
};

type filterType = 'all' | 'active' | 'done';

type todoBooleanTypes = 'done' | 'important';

type langTypes = 'en' | 'ua';
