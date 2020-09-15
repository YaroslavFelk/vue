<template>
  <div class="content__catalog">
    <ProductFilter
      :price-from.sync="filterPriceFrom"
      :price-to.sync="filterPriceTo"
      :category-id.sync="filterCategoryId"
      :color.sync="filterColor"
    />

    <section class="catalog">
      <ul class="catalog__list">
        <ProductList :products="products"/>
      </ul>

      <BasicPagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
    </section>
  </div>

</template>

<script lang="ts">
import products from '@/data/products';
import { Vue } from 'vue-property-decorator';
import ProductList from './components/ProductList.vue';
import BasicPagination from './components/BasicPagination.vue';
import ProductFilter from './components/ProductFilter.vue';

const App = Vue.extend({
  components: {
    ProductList,
    BasicPagination,
    ProductFilter,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: '',
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= this.filterPriceFrom,
        );
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= this.filterPriceTo,
        );
      }
      if (this.filterCategoryId > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId,
        );
      }
      if (this.filterColor) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.find((color) => color === this.filterColor),
        );
      }
      return filteredProducts;
    },
    products(): object {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts(): number {
      return this.filteredProducts.length;
    },
  },
});

export default App;
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
