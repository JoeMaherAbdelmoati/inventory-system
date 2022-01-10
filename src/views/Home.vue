<template>
  <div class="home">
    <InventoryList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InventoryList from '@/components/InventoryList.vue';

@Component({
  components: {
    InventoryList,
  },
})
export default class Home extends Vue {}
</script>
