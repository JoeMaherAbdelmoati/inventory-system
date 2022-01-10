import { expect } from 'chai';
import { addOrReturnItem, removeItem } from '@/services/inventoryManagmentSystem';
import { addItemObjType, listItems } from '@/types';

let data:addItemObjType;

beforeEach(() => {
  data = {
    list: [{ itemName: 'A', value: 2, quantity: 2 }],
    itemName: '',
    value: 0,
    quantity: 0,
  };
});
const lastItem = (list:listItems[]) => list[list.length - 1];

const firstItem = (list:listItems[]) => list[0];
describe('Store actions', () => {
  it('Add item with new name', () => {
    data.itemName = 'B';
    data.value = 2;
    data.quantity = 2;

    const result = addOrReturnItem(data);
    const desiredItem = lastItem(result);
    expect(desiredItem.itemName).to.equals(data.itemName);
    expect(desiredItem.value).to.equals(data.value);
    expect(desiredItem.quantity).to.equals(data.quantity);
  });

  it('Add item with same name and value as existing one', () => {
    data.itemName = 'A';
    data.value = 2;
    data.quantity = 2;

    const result = addOrReturnItem(data);
    const desiredItem = firstItem(result);
    expect(desiredItem.itemName).to.equals(data.itemName);
    expect(desiredItem.value).to.equals(data.value);
    expect(desiredItem.quantity).to.greaterThan(data.quantity);
  });

  it('Add item with same name and different value as existing one', () => {
    data.itemName = 'A';
    data.value = 1;
    data.quantity = 2;

    const result = addOrReturnItem(data);
    const desiredItem = lastItem(result);
    expect(desiredItem.itemName).to.equals(data.itemName);
    expect(desiredItem.value).to.equals(data.value);
    expect(desiredItem.quantity).to.equals(data.quantity);
  });

  it('remove item with same name and quantity is less than item quantity', () => {
    data.itemName = 'A';
    data.value = 2;
    data.quantity = 1;

    const result = removeItem(data);
    const desiredItem = firstItem(result);
    expect(desiredItem.itemName).to.equals(data.itemName);
    expect(desiredItem.value).to.equals(data.value);
    expect(desiredItem.quantity).to.equals(1);
  });
  it('remove item with same name and quantity is same as item quantity', () => {
    data.itemName = 'A';
    data.value = 2;
    data.quantity = 2;

    const result = removeItem(data);
    expect(result.length).to.equals(0);
  });
  it('remove item with same name and quantity greater than item quantity', () => {
    data.itemName = 'A';
    data.value = 2;
    data.quantity = 3;
    try {
      removeItem(data);
    } catch (e) {
      expect(e.message).to.includes('item quantity larger than purchase');
    }
  });
  it('remove item that not exists', () => {
    data.itemName = 'C';
    data.value = 2;
    data.quantity = 3;
    try {
      removeItem(data);
    } catch (e) {
      expect(e.message).to.equals('item is not found');
    }
  });
});
// TODO: add some test cases for validate forms like:
//  see inventory list empty.
//  see number of fields in add and remove item pages
