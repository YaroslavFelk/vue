<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a aria-label="Предыдущая страница"
         class="pagination__link pagination__link--arrow"
         :class="{'pagination__link--disabled' : page > 0}"
         href="#"
         @click.prevent="minPaginate(page - 1)"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link "
         :class="{'pagination__link--current': pageNumber === page}"
         @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a aria-label="Следующая страница"
         class="pagination__link pagination__link--arrow"
         :class="{'pagination__link--disabled' : page <= this.pages}"
         href="#"
         @click.prevent="maxPaginate(page + 1)"
      >
        <svg fill="currentColor" height="14" width="8">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    maxPaginate(page) {
      if (page <= this.pages) {
        this.paginate(page);
      }
    },
    minPaginate(page) {
      if (page > 0) {
        this.paginate(page);
      }
      return false;
    },
  },
};

</script>
