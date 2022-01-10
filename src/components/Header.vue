<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/addItem">Add item to inventory</router-link> |
    <router-link to="/removeItem">Remove item from inventory</router-link> |
    <router-link to="/returnItem">return item to inventory</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

</style>
