<template>
  <section class="pagination" :class="isMobile ? 'isMobile' : ''">
    <div
      class="container"
      :class="`${
        hasNextCondition && !hasPreviousCondition ? 'justifyContentEnd' : ''
      } ${
        !hasNextCondition && hasPreviousCondition ? 'justifyContentStart' : ''
      }`"
    >
      <button
        v-if="hasPreviousCondition"
        class="paginationButton"
        :disabled="isLoading"
        @click="prevPage"
      >
        l
      </button>

      <div v-for="(currentPage, idx) in range" :key="idx">
        <div
          class="indexWrapper"
          :class="`${page === currentPage ? 'active' : ''}`"
          :data-marker="page === currentPage && `de ${count}`"
        >
          <div class="paginationIndex" @click="selectPage(currentPage)">
            <p>{{ currentPage }}</p>
          </div>
        </div>
      </div>

      <button
        v-if="hasNextCondition"
        class="paginationButton"
        :disabled="isLoading"
        @click="nextPage"
      >
        r
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IPagination } from '@venice/core/models'

import {
  getRangeIndexes,
  hasNextRange,
  hasPreviousRange,
} from './helpers/PaginationHelper'

@Component
export default class Pagination extends Vue {
  @Prop({ default: 1 }) count!: IPagination['count']
  @Prop({ default: 1 }) page!: IPagination['page']
  @Prop({ default: false }) isLoading!: IPagination['isLoading']
  @Prop() onChange!: IPagination['onChange']
  @Prop() className!: IPagination['className']

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

  isInvalid = () => this.page < 1 || this.page > this.count || this.count < 1

  nextPage = () => this.onChange && this.onChange(this.page + 1)
  prevPage = () => this.onChange && this.onChange(this.page - 1)
  selectPage = (newPage: number) => this.onChange && this.onChange(newPage)

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
