<template>
  <ul class="catalog__list" >
    <ProductItem v-for="product in products"  :product="product" :key="product.id"/>
  </ul>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import ProductItem from '@/components/ProductItem.vue';

@Component({
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
})
export default class ProductList extends Vue {}
</script>
