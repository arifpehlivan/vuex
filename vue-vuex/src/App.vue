<template>
  <div id="app">
    <product-list :products="products"/>
    <product-list-two :products="products"/>
    
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  components: {
    ProductList,
    ProductListTwo
  },
  data(){
    return {
      
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