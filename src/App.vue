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
      <product-details></product-details>
    </div>
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
import ProductDetails from './ProductDetails.vue'
import myHeader from './Header.vue'

export default {
  data () {
    return {
      secondPart: 'Second Part'
    }
  },
  components: {
    myHeader,
    'products': ProductsList,
    ProductDetails
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
