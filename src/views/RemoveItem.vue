<template>
  <div class="add-item">
    <ActionForm :handle-action="removeAnItem"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { REMOVE_ITEM } from '@/config';
import { listItems } from '@/types';
import ActionForm from '@/components/ActionForm.vue';

    @Component({
      components: {
        ActionForm,
      },
    })
export default class RemoveItem extends Vue {
        @Action(REMOVE_ITEM)
        removeItem!: (data:listItems) => Promise<void>;

        removeAnItem(data:listItems):Promise<void> {
          return this.removeItem(data).then(() => {
            console.log('Item removed successfully');
          });
        }
}
</script>
