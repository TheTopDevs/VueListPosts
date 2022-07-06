<template>
  <div class="main-layout">
    <div class="main-layout__container">
      <div class="main-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style lang="scss" scoped>
.main-layout {
  height: var(--main-container-height);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &__content {
    height: 100%;
    padding: 32px 16px;
    overflow-y: auto;
  }
}
</style>