<template>
  <div id="app">
    <product-list :products="products"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
export default {
  name: 'app',
  components: {
    ProductList
  },
  data(){
    return {
      products:[
        {title: 'Tv', price: 5000},
        {title: 'Pc', price: 8000},
        {title: 'Game Console', price: 15000},
        {title: 'Phone', price: 6000},
      ]
    }
  }
}
</script>

<style scoped>
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
  'Open Sans', 'Helvetica Neue', sans-serif;
  color: #555;
}
</style>