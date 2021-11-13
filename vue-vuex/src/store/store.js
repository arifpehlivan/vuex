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
    }
})