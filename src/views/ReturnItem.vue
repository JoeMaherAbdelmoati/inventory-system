<template>
  <div class="add-item">
    <ActionForm :handle-action="returnAnItem" show-value/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { RETURN_ITEM } from '@/config';
import { listItems } from '@/types';
import ActionForm from '@/components/ActionForm.vue';

    @Component({
      components: {
        ActionForm,
      },
    })
export default class ReturnItem extends Vue {
        @Action(RETURN_ITEM)
        returnItem!: (data:listItems) => Promise<void>;

        returnAnItem(data:listItems):Promise<void> {
          return this.returnItem(data).then(() => {
            console.log('Item returned successfully');
          });
        }
}
</script>
