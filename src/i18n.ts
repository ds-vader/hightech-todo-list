import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Todo List': 'Todo List',
      'more to do': 'more to do',
      done: 'done',
      'type to search': 'type to search',
      All: 'All',
      Active: 'Active',
      Done: 'Done',
      'Add item': 'Add item',
      'Add new todo': 'Add new todo',
      'Task name': 'Task name',
      'What needs to be done': 'What needs to be done',
      'Add end date': 'Add end date',
      Todos: 'Todos',
      Label: 'Label',
      Important: 'Important',
      'Start date': 'Start date',
      'End date': 'End date',
      'left time': 'left time',
      'day(s)': 'day(s)',
      'hour(s)': 'hour(s)',
      'minute(s)': 'minute(s)',
      'Add task title': 'Add task title',
      'Do you really want to remove': 'Do you really want to remove',
      'Task already exist': 'Task already exist',
    },
  },
  ua: {
    translation: {
      'Todo List': 'Список',
      'more to do': 'залишилось',
      done: 'зроблено',
      'type to search': 'введіть для пошуку',
      All: 'Всі',
      Active: 'Активні',
      Done: 'Виконані',
      'Add item': 'Додати',
      'Add new todo': 'Додати нове завдання',
      'Task name': 'Назва завдання',
      'What needs to be done': 'Що потрібно зробити',
      'Add end date': 'Додати кінечну дату',
      Todos: 'Справи',
      Label: 'Завдання',
      Important: 'Важливо',
      'Start date': 'Дата початку',
      'End date': 'Дата кінця',
      'left time': 'залишилось часу',
      'day(s)': 'день(ів)',
      'hour(s)': 'годин(и)',
      'minute(s)': 'хвилина(и)',
      'Add task title': 'Додайте назву завдання',
      'Do you really want to remove': 'Ви впевнені, що хочете видалити',
      'Task already exist': 'Завдання вже існує',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
