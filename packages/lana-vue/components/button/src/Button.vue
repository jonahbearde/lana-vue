<script setup lang="ts"></script>

<template>
  <button class="lana-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.lana-button {
  background-color: var(--lana-color-red);
  font-size: 20px;
  font-weight: 700;
}
</style>
