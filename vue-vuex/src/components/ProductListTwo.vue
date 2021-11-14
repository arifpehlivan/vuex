<template>
  <div id="product-list-two">
      <h2>Product List Two</h2>
      <ul>
          <li v-for="(product,index) in discountProducts" :key="index">
            <span class="title">{{ product.title }}</span>
            <span class="price"> ${{ product.price }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        products(){
            return this.$store.state.products;
        },
        discountProducts(){
             return this.$store.getters.discountProducts;
        //     var discounted = this.$store.state.products.map(product=>{
        //         return {
        //             title: '%50 off ' + product.title,
        //             price: product.price/2
        //         }
        //     });
        //     return discounted;
         }
    }
}
</script>

<style scoped>
#product-list-two{
    background: rgb(145, 130, 110);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 2);
    margin-bottom: 30px;
    padding: 10px 20px;
}

#product-list-two ul{
    padding: 0;
    list-style-type: none;
}

#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    border-radius: 20px;
}

.price{
    font-weight: bold;
    color: #bc551a;
    display: block;
}

</style>