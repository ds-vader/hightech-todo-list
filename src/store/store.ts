import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { makeAutoObservable } from 'mobx';
import i18n from '../i18n';

class TodoStore {
  //store
  items: Array<Todo> = [
    {
      id: '1',
      label: 'todo 1',
      important: true,
      done: false,
      startDate: '1980-12-25 00:00',
      endDate: '',
    },
    {
      id: '2',
      label: 'todo 2',
      important: false,
      done: false,
      startDate: '1995-12-25 05:12',
      endDate: '1998-12-25',
    },
    {
      id: '3',
      label: 'todo 3',
      important: false,
      done: false,
      startDate: '1990-10-25 00:00',
      endDate: '1999-10-25 00:00',
    },
  ];
  filter: filterType = 'all';
  search: string = '';
  archive: Array<Todo> = [];
  constructor() {
    makeAutoObservable(this);
  }

  //actions
  private createItem = (name: string, endDate: string): Todo => {
    return {
      id: uuidv4(),
      label: name,
      important: false,
      done: false,
      startDate: moment().format(),
      endDate: endDate,
    };
  };

  public addItem = (label: string, endDate: string): void => {
    if (
      this.items.some(
        (item) => item.label.toLocaleLowerCase() === label.toLocaleLowerCase()
      )
    ) {
      alert(i18n.t('Task already exist'));
    } else {
      this.items.push(this.createItem(label, endDate));
    }
  };

  public setSearchText = (text: string): void => {
    this.search = text;
  };

  public toggle = (id: string, param: todoBooleanTypes): void => {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        item[param] = !item[param];
      }
      return item;
    });
  };

  public toggleDone = (id: string): void => {
    this.toggle(id, 'done');
  };

  public toggleImportant = (id: string): void => {
    this.toggle(id, 'important');
  };

  public deleteItem = (id: string): void => {
    const item = this.items.find((item) => item.id === id);

    if (
      window.confirm(
        i18n.t('Do you really want to remove') + ` ${item?.label}?`
      )
    ) {
      this.archive.push(item!);
      this.items = this.items.filter((item) => item.id !== id);
    }
  };

  // public updateItem = (updatedItem: Todo) => {
  //   this.items = this.items.map((item) => {
  //     if (item.id === updatedItem.id) {
  //       return { ...updatedItem };
  //     }
  //     return item;
  //   });
  // };

  public setFilter = (filter: filterType): void => {
    this.filter = filter;
  };

  private importantFirst = (arr: Array<Todo>): Array<Todo> => {
    return arr
      .filter((x) => x.important)
      .concat(arr.filter((y) => !y.important));
  };

  private doneLast = (arr: Array<Todo>): Array<Todo> => {
    return arr.filter((x) => !x.done).concat(arr.filter((y) => y.done));
  };

  // Computed values

  get incompleteItems() {
    return this.items.filter((item) => !item.done);
  }

  get incompleteItemsCount() {
    return this.incompleteItems.length;
  }

  get doneItems() {
    return this.items.filter((item) => item.done);
  }

  get doneItemsCount() {
    return this.doneItems.length;
  }

  get searchText() {
    return this.search.trim().length > 0;
  }

  get filteredItems() {
    if (this.filter === 'active') {
      return this.importantFirst(this.incompleteItems);
    }
    if (this.filter === 'done') {
      return this.importantFirst(this.doneItems);
    }
    return this.doneLast(this.importantFirst(this.items));
  }

  get foundItems() {
    const normalizeText = this.search.trim().toLowerCase();
    return this.filteredItems.filter(
      (item) => item.label.toLowerCase().indexOf(normalizeText) > -1
    );
  }

  get renderItems() {
    return this.searchText ? this.foundItems : this.filteredItems;
  }

  get archiveItems() {
    return this.archive;
  }
}
export default TodoStore;
