import { listItems, mapItemsObj } from '@/types';

export const findOne = (list: listItems[],
  itemName: string,
  value?: number):listItems|undefined => {
  if (value) {
    return list.find((item) => item.itemName === itemName && item.value === value);
  }
  return list.find((item) => item.itemName === itemName);
};
// eslint-disable-next-line arrow-body-style
export const filter = (list: listItems[], itemName: string, value: number):listItems[] => {
  return list.filter((item) => item.itemName !== itemName || item.value !== value);
};

export const updateQuantity = (params: mapItemsObj):listItems[] => {
  const {
    list, operation, itemName, value, quantity,
  } = params;
  return list.map((item) => {
    if (item.itemName === itemName && item.value === value) {
      item.quantity = operation(item.quantity, quantity);
    }
    return item;
  });
};
export const add = (a:number, b:number):number => a + b;
export const sub = (a:number, b:number):number => a - b;
export const addItem = (list: listItems[], item: listItems):listItems[] => {
  const newList = [...list];
  newList.push(item);
  return newList;
};
