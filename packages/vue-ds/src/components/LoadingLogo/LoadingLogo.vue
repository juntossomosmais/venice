<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 194 189.24"
    class="JSMLoading__logo"
  >
    <defs>
      <linearGradient
        id="red-gradient"
        x1="65.95"
        y1="134.86"
        x2="17.69"
        y2="96.85"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#c93f2b"></stop>
        <stop offset="1" stop-color="#ab2723"></stop>
      </linearGradient>
      <linearGradient
        id="green-gradient"
        x1="112.38"
        y1="35.11"
        x2="175.74"
        y2="98.47"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#9cb71e"></stop>
        <stop offset=".36" stop-color="#879e23"></stop>
        <stop offset=".74" stop-color="#788c28"></stop>
        <stop offset="1" stop-color="#728529"></stop>
      </linearGradient>
      <linearGradient
        id="orange-gradient"
        x1="76.23"
        y1="200.72"
        x2="138.62"
        y2="125.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ed7004"></stop>
        <stop offset="1" stop-color="#f59a2d"></stop>
      </linearGradient>
      <linearGradient
        id="blue-gradient"
        x1="62.6"
        y1="55.84"
        x2="93.22"
        y2="14.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0bbbef"></stop>
        <stop offset="1" stop-color="#005f9f"></stop>
      </linearGradient>
    </defs>
    <g>
      <g class="JSMLoading__red-piece JSMLoading--fade-animation">
        <circle
          class="JSMLoading__red-piece--fill"
          cx="18.25"
          cy="170.05"
          r="18.25"
        ></circle>
        <path
          class="JSMLoading__red-piece--fill"
          d="M87.63 125.93V175c0 12.47-8.95 17.77-19.88 11.76L39.5 150.61l41.63-40.52a22.61 22.61 0 0 1 6.5 15.84z"
        ></path>
        <path
          d="M15.87 103.25H65a22.59 22.59 0 0 1 16.17 6.84L39.5 150.61 4.11 123.12c-6-10.93-.71-19.87 11.76-19.87z"
          fill="url(#red-gradient)"
        ></path>
      </g>
      <g class="JSMLoading__green-piece JSMLoading--fade-animation">
        <path
          class="JSMLoading__green-piece--fill"
          d="M156 18.49A18.26 18.26 0 1 0 174.26.23 18.25 18.25 0 0 0 156 18.49zM124.76 2.48c-10.93-6-19.87-.71-19.87 11.76v49.08a22.58 22.58 0 0 0 6.93 16.25l40.91-41.23z"
        ></path>
        <path
          d="M188.41 66.12l-35.68-27.78-40.91 41.23A22.53 22.53 0 0 0 127.57 86h49.09c12.47 0 17.76-8.94 11.75-19.88z"
          fill="url(#green-gradient)"
        ></path>
      </g>
      <g class="JSMLoading__orange-piece JSMLoading--fade-animation">
        <circle
          class="JSMLoading__orange-piece--fill"
          cx="173.83"
          cy="170.05"
          r="18.25"
        ></circle>
        <path
          class="JSMLoading__orange-piece--fill"
          d="M129.21 103.25h49.07c12.47 0 17.76 8.94 11.76 19.87l-36.28 28.4-40.91-41.23a22.62 22.62 0 0 1 16.36-7.04z"
        ></path>
        <path
          d="M153.76 151.52l-27.35 35.24c-10.93 6-19.87.71-19.87-11.76v-49.07a22.59 22.59 0 0 1 6.31-15.64z"
          fill="url(#orange-gradient)"
        ></path>
      </g>
      <g class="JSMLoading__blue-piece JSMLoading--fade-animation">
        <path
          class="JSMLoading__blue-piece--fill"
          d="M2.08 18.49A18.26 18.26 0 1 0 20.34.23 18.26 18.26 0 0 0 2.08 18.49z"
        ></path>
        <path
          d="M87.63 63.32V14.24c0-12.48-8.95-17.77-19.88-11.76l-29 36.88 41.62 40.5a22.57 22.57 0 0 0 7.26-16.54z"
          fill="url(#blue-gradient)"
        ></path>
        <path
          class="JSMLoading__blue-piece--fill"
          d="M38.77 39.36L4.12 66.12C-1.89 77.06 3.4 86 15.88 86H65a22.57 22.57 0 0 0 15.44-6.14z"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'LoadingLogo',
})
export default class LoadingLogo extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/LoadingLogo.module.scss';
</style>
