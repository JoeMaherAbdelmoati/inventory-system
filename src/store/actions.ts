import {
  ADD_ITEM, REMOVE_ITEM, RETURN_ITEM, UPDATE_INVENTORY,
} from '@/config';
import { contextType } from '@/types/action.type';
import { listItems } from '@/types';
import { addOrReturnItem, removeItem } from '@/services/inventoryManagmentSystem';

export const actions = {
  [ADD_ITEM](context: contextType, data: listItems) {
    const newList = addOrReturnItem({
      list: context.state.inventoryListItems,
      ...data,
    });
    context.commit(UPDATE_INVENTORY, newList);
  },
  [REMOVE_ITEM](context: contextType, data: listItems) {
    const newList = removeItem({
      list: context.state.inventoryListItems,
      ...data,
    });
    context.commit(UPDATE_INVENTORY, newList);
  },
  [RETURN_ITEM](context: contextType, data: listItems) {
    const newList = addOrReturnItem({
      list: context.state.inventoryListItems,
      ...data,
    });
    context.commit(UPDATE_INVENTORY, newList);
  },
};
