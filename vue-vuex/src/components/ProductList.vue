<template>
  <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <li v-for="(product,index) in discountProducts" :key="index">
            <span class="title">{{ product.title }}</span>
            <span class="price"> ${{ product.price }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return{

        }
    },
    computed:{
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'discountProducts'
        ])
        //  discountProducts(){
        //      return this.$store.getters.discountProducts;
        // //     var discounted = this.$store.state.products.map(product=>{
        // //         return {
        // //             title: '%50 off ' + product.title,
        // //             price: product.price/2
        // //         }
        // //     });
        // //     return discounted;
        //  }
    },
    methods:{
        // discountPrice:function(){
        //     // this.$store.commit('discountPrice');
        //     this.$store.dispatch('discountPrice')
        // }
        ...mapActions([
            'discountPrice'
        ])
    }
}
</script>

<style scoped>
#product-list-one{
    background: rgb(170, 126, 170);
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

.price{
    font-weight: bold;
    color: #1abc9c;
}

</style>