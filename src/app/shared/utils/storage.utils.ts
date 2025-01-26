import localforage from 'localforage';

const DB_NAME = 'employee-management-portal';

const employeeTable = localforage.createInstance({
  name: DB_NAME,
  storeName: 'employee',
});

const otherTable = localforage.createInstance({
  name: DB_NAME,
  storeName: 'other',
});

type StorageOptions = {
  table?: 'employee' | 'other';
};

function getStorageTable(table: StorageOptions['table']): LocalForage {
  switch (table) {
    case 'employee':
      return employeeTable;
    default:
      return otherTable;
  }
}

async function getItem(item: string, options?: StorageOptions): Promise<any> {
  const table = getStorageTable(options?.table || 'other');
  const data = await table.getItem(item);
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  return data ?? null;
}

async function getItems(options?: StorageOptions): Promise<any[]> {
  const table = getStorageTable(options?.table || 'other');
  const keys = await table.keys();
  const values = await Promise.all(keys.map(key => table.getItem(key)));
  return values;
}

function setItem(itemName: string, data: any, options?: StorageOptions): void {
  if (data === null || data === undefined) {
    return;
  }

  const table = getStorageTable(options?.table || 'other');
  table.setItem(itemName, data);
}

function removeItem(item: string, options?: StorageOptions): void {
  const table = getStorageTable(options?.table || 'other');
  table.removeItem(item);
}

function clear(options?: StorageOptions): void {
  const table = getStorageTable(options?.table || 'other');
  table.clear();
}

function clearAll(): void {
  localforage.clear();
}

export const storage = {
  getItem,
  getItems,
  setItem,
  removeItem,
  clear,
  clearAll,
};
