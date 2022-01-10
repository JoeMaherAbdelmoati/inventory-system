<template>
  <div class="add-item">
    <ActionForm :handle-action="addAnItem" show-value/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { ADD_ITEM } from '@/config';
import { listItems } from '@/types';
import ActionForm from '@/components/ActionForm.vue';

    @Component({
      components: {
        ActionForm,
      },
    })
export default class AddItem extends Vue {
        @Action(ADD_ITEM)
        addItem!: (data:listItems) => Promise<void>;

        addAnItem(data:listItems):Promise<void> {
          return this.addItem(data).then(() => {
            console.log('Item added successfully');
          });
        }
}
</script>
