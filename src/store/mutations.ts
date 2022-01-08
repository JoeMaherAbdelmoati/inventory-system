import { UPDATE_INVENTORY } from '@/config';
import { listItems, stateType } from '@/types';

export const mutations = {
  [UPDATE_INVENTORY](state: stateType, payload: listItems[]) {
    state.inventoryListItems = [...payload];
  },
};
