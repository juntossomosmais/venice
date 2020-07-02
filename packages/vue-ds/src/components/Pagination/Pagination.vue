<template>
  <section class="pagination" :class="`${isMobile ? 'isMobile' : ''}`">
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
        :v-on:click="prevPage"
      >
        l
      </button>

      <div v-for="(currentPage, idx) in range" :key="idx">
        <div
          class="indexWrapper"
          :class="`${page === currentPage ? 'active' : ''}`"
          :data-marker="page === currentPage && `de ${count}`"
        >
          <div class="paginationIndex" :v-on:click="() => onSelect(page)">
            <p>{{ currentPage }}</p>
          </div>
        </div>
      </div>

      <button
        v-if="hasNextCondition"
        class="paginationButton"
        :disabled="isLoading"
        :v-on:click="nextPage"
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
  @Prop({ default: () => null }) onChange!: IPagination['onChange']
  @Prop() className!: IPagination['className']

  private maxPhoneWidth = 420
  private isMobile = false

  /*
  TODO: add this debounce function
  debounce = (func: () => void, wait: number) => {
    let timer: NodeJS.Timeout

    return () => {
      clearTimeout(timer)
      timer = setTimeout(func, wait)
    }
  }
  */
  isInvalid = () => this.page < 1 || this.page > this.count || this.count < 1

  checkDevice = () => {
    console.log('chamando check device')
    this.isMobile = window.innerWidth <= this.maxPhoneWidth
  }

  //debouncedCheck = (this.checkDevice, 200)

  hasNextCondition = this.isMobile
    ? hasNextRange(2, this.page, this.count)
    : hasNextRange(3, this.page, this.count)

  hasPreviousCondition = this.isMobile
    ? hasPreviousRange(2, this.page)
    : hasPreviousRange(3, this.page)

  nextPage = () => this.onChange && this.onChange(this.page + 1)
  prevPage = () => this.onChange && this.onChange(this.page - 1)
  onSelectPage = (newPage: number) => this.onChange && this.onChange(newPage)

  rangeLimits = () => getRangeIndexes(this.count, this.page, this.isMobile)

  //TODO: improve this, maybe using an object
  startOfRange = this.rangeLimits()[0]
  endOfRange = this.rangeLimits()[1]

  getAllIndexes = () => Array.from(Array(this.count + 1).keys()).slice(1)
  range = this.getAllIndexes().slice(this.startOfRange, this.endOfRange)

  mounted() {
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice)
  }
}
</script>

<style lang="scss" scoped>
@import '@venice/styles/components/Pagination.module.scss';
</style>
