import {
  inventoryManagementSystem,
} from '@/interfaces/inventoryManagmentSystem.interface';
import { addItemObjType, listItems } from '@/types';

const addItem = (obj:addItemObjType):listItems[] => {
  const {
    list,
    itemName,
    value,
    quantity,
  } = obj;

  let listOfItems = [...list];
  const callback = (item:listItems) => item.itemName === itemName && item.value === value;
  const itemOfInventory = listOfItems.find(callback);

  if (!itemOfInventory || itemOfInventory.value !== value) {
    listOfItems.push({ itemName, value, quantity });
  } else {
    listOfItems = listOfItems.map((item) => {
      if (item.itemName === itemName && item.value === value) {
        item.quantity += quantity;
      }
      return item;
    });
  }
  return listOfItems;
};

export default class InventoryManagementSystem implements inventoryManagementSystem {
  list: listItems[];

  constructor(items?: listItems[]) {
    this.list = items ? [...items] : [];
  }

  addItem(itemName: string, quantity: number, value: number):void {
    this.list = addItem({
      list: this.list, itemName, value, quantity,
    });
  }

  removeItem(itemName: string, quantity: number):void{
    const callbackFun = (item:listItems) => item.itemName === itemName && item.quantity >= quantity;
    const itemOfInventory = this.list.find(callbackFun);

    if (!itemOfInventory) {
      throw new Error('item is not found');
    }
    if (itemOfInventory.quantity === quantity) {
      const callback = (item:listItems) => item.itemName !== itemName || item.quantity !== quantity;
      this.list = this.list.filter(callback);
    } else {
      this.list = this.list.map((item) => {
        if (item.itemName === itemName && item.quantity >= quantity) {
          item.quantity -= quantity;
        }
        return item;
      });
    }
  }

  returnItem(itemName: string, quantity: number, value: number) :void{
    this.list = addItem({
      list: this.list, itemName, value, quantity,
    });
  }
}
