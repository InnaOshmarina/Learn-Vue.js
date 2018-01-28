import Vue from 'vue'
import _ from 'lodash';

// Для централизации данных создадим еще один объект Vue:

export default new Vue({
    data: {
        products: [
                    {
                        id: 1,
                        title: 'Sony Xperia XZ Premium Dual SIM (red)',
                        price: 1350,
                        qt: 16
                    },
                    {
                        id: 2,
                        title: 'Sony Xperia XZ Premium Deepsea Black [G8141]',
                        price: 1250,
                        qt: 19
                    },
                    {
                        id: 3,
                        title: 'Sony Xperia XZ1 Dual',
                        price: 1200,
                        qt: 20
                    },
                    {
                        id: 4,
                        title: 'Sony Xperia XZ1 Compact (blue)',
                        price: 1050,
                        qt: 45
                    }
              ]
      },
      methods: {
          viewSashaDetails(id) {
                let productToView = _.find(this.products, {id: id});
                this.$emit('viewDetails', productToView);
          },
          addProduct(title, price, qt) {
            let id = this.products[this.products.length - 1].id + 1;
            this.products.push({
              id,
              title,
              price,
              qt
            })
          }
      }
})
