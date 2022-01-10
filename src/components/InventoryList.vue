<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 v-if="this.inventoryList.length===0">Inventory is Empty</h1>
      <h1 v-if="this.inventoryList.length">Inventory Items</h1>
      <div v-for="item in this.inventoryList" class="col-lg-2 col-md-4 col-sm-6"
           :key="item.itemName+item.value">

        <b-card
          :title="item.itemName"
          tag="div"
          style="max-width: 20rem;"
          class="mb-2 mx-auto"
        >
          <b-card-text>
            Value: {{item.value}}
            <br/>
            Quantity: {{item.quantity}}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { stateType } from '@/types';

export default {
  name: 'InventoryList',
  computed: mapState<stateType>({
    inventoryList: (state:stateType) => state.inventoryListItems,
  }),
};
</script>
