<template>
    <div class="product">
        <form>
          <div class="form-group">
              <label for="title">Title</label>
              <input type="text" id="title" class="form-control" placeholder="Enter title" v-model="product.title">
          </div>
          <div class="form-group">
              <label for="price">Price</label>
              <input type="number" id="price" class="form-control" placeholder="Enter price" v-model="product.price">
          </div>
          <div class="form-group">
              <label for="qt">Quantity</label>
              <input type="number" id="qt" class="form-control" placeholder="Enter quantity" v-model="product.qt">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Submit</button>
        </form>
    </div>
</template>

<script>
import ProductService from './ProductService.js'

export default {
  data() {
    return {
      product: {}
    }
  },
  methods: {
    addProduct() {
      ProductService.addProduct(this.product.title, this.product.price, this.product.qt);
    }
  }

}
</script>

<style lang="scss" scoped>
    .product {
            border: 3px solid blue;
    }
</style>

