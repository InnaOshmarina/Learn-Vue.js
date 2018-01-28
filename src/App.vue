<template>
  <div>
    <my-header>
      <h1>Communication between components in Vue.js</h1>
      <p> {{ secondPart }}</p>
      <h2 slot="subtitle">Slots</h2>
      <p slot="subtitle">Slots - second part</p>
    </my-header>
    <div class="container">
      <products></products>
      <div>
          <button type="button" class="btn btn-warning" @click="mode=(mode == 'view' ? 'add' : 'view')">Mode: {{ mode }}</button>
          <keep-alive>
             <component :is="componentName"></component>
          </keep-alive>
      </div>

    </div>
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
import ProductDetails from './ProductDetails.vue'
import ProductAdd from './ProductAdd.vue'
import myHeader from './Header.vue'

export default {
  data () {
    return {
      secondPart: 'Second Part',
      mode: 'view'
    }
  },
  computed: {
    componentName() {
      return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd';
    }
  },
  components: {
    myHeader,
    'products': ProductsList,
    ProductDetails,
    ProductAdd
  }
}
</script>

<style lang="scss">
    h2 {
        color: red;
    }
    .container {
        display: flex;
        align-items: flex-start;
    }
</style>
