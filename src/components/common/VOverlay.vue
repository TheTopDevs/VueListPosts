<template>
  <div class="v-overlay">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VOverlay"
};
</script>

<style lang="scss" scoped>
.v-overlay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, .7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
</style>