<template>
  <div>
    <div class="product">
      <h2>Product Detail</h2>
      <form>
        <div>
            <label for="title">Title: </label>
            <span>{{ product.title }}</span>
          </div>
          <div>
            <label for="price">Price, </label>
            <span>$: {{ product.price }}</span>
          </div>
          <div>
            <label for="qt">Quantity: </label>
            <span>{{ product.qt }}</span>
          </div>
      </form>
    </div>
    <div class="counter d-flex flex-row-reverse">
      <button class="btn-danger btn-lg">Passed {{ this.counter }} seconds.</button>
    </div>
  </div>
</template>


<script>
import ProductService from './ProductService.js'
export default {
  data() {
    return {
      product: {},
      counter: 0,
      leakyReference: null
    }
  },
  created() {
    console.log('created');
    // каждую секунду инкрементим счетчик:
    setInterval(() => {this.counter++}, 1000);
    ProductService.$on('viewDetails', (selectedProduct) => {
      this.product = selectedProduct;
    })
  },
  beforeCreate() {
    console.log('before create');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('this.counter');
  },
  updated() {
    console.log('updated');
  },
  // сработает только если убрать в файле App.vue <keep-alive>:
  beforeDestroy() {
    this.leakyReference = null;
    console.log('before destroy');
  },
  destroyed() {
    console.log('destroyed')
  },
  // сработает только если компонент обернут в <keep-alive>:
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }

}
</script>

<style lang="scss">
    .product {
            width: 500px;
            border: 1px solid red;
            border-radius: 10px;
            margin: 10px;
            padding: 10px;
    }

    .counter {
      margin-top: 49px;
    }
</style>

