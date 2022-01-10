import { addItemObjType, listItems } from '@/types';
import {
  add,
  addItem,
  filter,
  findOne,
  sub,
  updateQuantity,
} from '@/utilities/invintoryList.utility';

export const addOrReturnItem = (obj: addItemObjType): listItems[] => {
  const {
    list,
    itemName,
    value,
    quantity,
  } = obj;

  let listOfItems = [...list];

  const itemOfInventory = findOne(list, itemName, value);

  if (!itemOfInventory || itemOfInventory.value !== value) {
    listOfItems = addItem(list, { itemName, value, quantity });
  } else {
    listOfItems = updateQuantity({
      list, itemName, value, quantity, operation: add,
    });
  }
  return listOfItems;
};
export const removeItem = (obj: addItemObjType): listItems[] => {
  const { list, quantity, itemName } = obj;

  const itemOfInventory = findOne(list, itemName);
  if (!itemOfInventory) {
    throw new Error('item is not found');
  }
  if (itemOfInventory.quantity < quantity) {
    throw new Error(`item quantity larger than purchase, max is ${itemOfInventory.quantity}`);
  }
  let listOfItems = list;
  if (itemOfInventory.quantity === quantity) {
    listOfItems = filter(list, itemName, itemOfInventory.value);
  } else {
    listOfItems = updateQuantity({
      list,
      itemName,
      value: itemOfInventory.value,
      quantity,
      operation: sub,
    });
  }
  return listOfItems;
};
