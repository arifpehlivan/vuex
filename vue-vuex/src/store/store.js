import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {title: 'Tv', price: 5000},
            {title: 'Pc', price: 8000},
            {title: 'Game Console', price: 15000},
            {title: 'Phone', price: 6000},
          ]
    },
    getters:{
        discountProducts:(state)=>{
            var discounted = state.products.map(product=>{
                return {
                    title: '%50 off ' + product.title,
                    price: product.price/2
                    }
            });
            return discounted;
        }
    },
    mutations:{
        discountPrice:(state, payload)=>{
            state.products.forEach(product=>{
                product.price -= payload;
            })
        }
    },
    actions:{
        discountPrice:(context,m)=>{
            setTimeout(function(){
                context.commit('discountPrice',m)
            },5000)
        }
    }
})