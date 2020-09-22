<template>

  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.img"  :alt="product.name">
    </a>
    <h3 class="catalog__title">
      <a href="#">
        {{product.name}}
      </a>
    </h3>

    <span class="catalog__price">
              {{product.price}} ₽
            </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color"
                  :value="color" >
          <span class="colors__value" :style="{'background-color': color}">
                  </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>

export default {
  props: {
    product: Object,
  },
};
</script>
