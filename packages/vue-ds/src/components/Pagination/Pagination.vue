<template>
  <section v-show="!isInvalid" :class="PaginationClass">
    <div :class="PaginationContainerClass">
      <button
        v-show="hasPreviousCondition"
        class="paginationButton"
        :disabled="isLoading"
        @click="prevPage"
      >
        <AngleLeft :width="12" :height="23" viewBox="-1 3 12 7" />
      </button>
      <div
        v-for="currentPage in range"
        :key="currentPage"
        class="indexWrapper"
        :class="page === currentPage ? 'active' : ''"
        :data-marker="page === currentPage && `de ${count}`"
      >
        <div class="paginationIndex" @click="selectPage(currentPage)">
          <p>{{ currentPage }}</p>
        </div>
      </div>
      <button
        v-show="hasNextCondition"
        class="paginationButton"
        :disabled="isLoading"
        @click="nextPage"
      >
        <AngleRight :width="12" :height="23" viewBox="-3 3 12 7" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from '@venice/core/helpers/Pagination'
import { IPagination } from '@juntossomosmais/venice-types'

// TODO: these icons should be replaced when there is an icon library
import AngleLeft from './icons/AngleLeft.vue'
import AngleRight from './icons/AngleRight.vue'

@Component({
  components: {
    AngleLeft,
    AngleRight,
  },
})
export default class Pagination extends Vue {
  @Prop({ default: 1 }) count!: IPagination['count']
  @Prop({ default: 1 }) page!: IPagination['page']
  @Prop({ default: false }) isLoading!: IPagination['isLoading']
  @Prop() customClass!: IPagination['className']

  private maxPhoneWidth = 420
  private isMobile = false
  private range: number[] = []

  debounce = (func: () => void, wait: number) => {
    let timer: number

    return () => {
      clearTimeout(timer)
      timer = window.setTimeout(func, wait)
    }
  }

  checkDevice = () => window.innerWidth <= this.maxPhoneWidth

  @Watch('page')
  setState() {
    this.isMobile = this.checkDevice()
    this.range = this.getRange
  }

  debouncedSetState = this.debounce(this.setState, 200)

  created() {
    this.setState()
    window.addEventListener('resize', this.debouncedSetState)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedSetState)
  }

  nextPage() {
    this.$emit('next-page', this.page + 1)
  }
  prevPage() {
    this.$emit('previous-page', this.page - 1)
  }
  selectPage(newPage: number) {
    this.$emit('select-page', newPage)
  }

  get PaginationClass() {
    return ['pagination', this.isMobile ? 'isMobile' : '', this.customClass]
  }

  get PaginationContainerClass() {
    return [
      'container',
      this.hasNextCondition && !this.hasPreviousCondition
        ? 'justifyContentEnd'
        : '',
      !this.hasNextCondition && this.hasPreviousCondition
        ? 'justifyContentStart'
        : '',
    ]
  }

  get isInvalid() {
    return this.page < 1 || this.page > this.count || this.count < 1
  }

  get hasNextCondition() {
    return this.isMobile
      ? hasNextRange(2, this.page, this.count)
      : hasNextRange(3, this.page, this.count)
  }

  get hasPreviousCondition() {
    return this.isMobile
      ? hasPreviousRange(2, this.page)
      : hasPreviousRange(3, this.page)
  }

  get rangeLimits() {
    return getRangeIndexes(this.count, this.page, this.isMobile)
  }

  get getRange() {
    const allIndexes = Array.from(Array(this.count + 1).keys()).slice(1)
    const [startOfRange, endOfRange] = this.rangeLimits

    return allIndexes.slice(startOfRange, endOfRange)
  }
}
</script>

<style lang="scss" scoped>
@import '@venice/styles/components/Pagination.module.scss';
</style>
