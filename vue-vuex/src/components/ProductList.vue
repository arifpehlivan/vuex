<template>
  <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <li v-for="(product,index) in products" :key="index">
            <span class="title">{{ product.title }}</span>
            <span class="const"> ${{ product.price }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['products'],
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#product-list-one{
    background: rgb(179, 29, 29);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 2);
    margin-bottom: 30px;
    padding: 10px 20px;
}

#product-list-one ul{
    padding: 0;
}

#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    border-radius: 20px;
}

</style>