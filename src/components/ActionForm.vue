<template>
  <div class="container text-start">
  <b-form>
    <b-form-group
      id="input-group-1"
      label="Item Name"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="itemName"
        type="text"
        placeholder="Enter Item Name"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Quantity" label-for="input-2">
      <b-form-input
        id="input-2"
        type="number"
        v-model="quantity"
        placeholder="Enter quantity"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Value" label-for="input-3" v-if="showValue">
      <b-form-input
        id="input-3"
        type="number"
        v-model="value"
        placeholder="Enter value"
        required
      ></b-form-input>
    </b-form-group>
    <h4 v-if="error" >{{this.error}}</h4>
    <b-button variant="outline-success" class="mt-3" @click="callAction">Save</b-button>
  </b-form>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import { listItems } from '@/types';

    @Component
export default class ActionForm extends Vue {
        @Prop() private handleAction!: (data:listItems)=>Promise<void>;

        @Prop(Boolean) private showValue!: boolean;
        // TODO: use form validation package like vee-validate or Vuelidate
        itemName='';

        quantity='';

        value='';

        error='';

        callAction():Promise<void>|string|undefined {
          this.error = '';
          if (!this.itemName || !this.quantity || (this.showValue && !this.value)) {
            this.error = 'Fill all the form';
            return;
          }
          try {
            this.handleAction({
              value: parseInt(this.value, 10),
              itemName: this.itemName,
              quantity: parseInt(this.quantity, 10),
            }).then(() => {
              this.itemName = '';
              this.value = '';
              this.quantity = '';
            });
          } catch (e) {
            this.error = e.message;
          }
        }
}
</script>
