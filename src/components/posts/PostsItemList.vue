<template>
  <li class="posts-item-list">
    <div class="posts-item-list__content p-1 mb-3">
      <div class="posts-item-list__title text-lg mb-2">{{ item.title }}</div>
      <div class="posts-item-list__body text-md mb-2"> {{ item.body }}</div>
      <button
          @click="$router.push(`/${item.id}`)"
          class="posts-item-list__btn cursor-pointer ml-auto"
      >
        <span>more</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "PostsItemList",
  props: {
    item: Object
  },
}
</script>

<style lang="scss" scoped>

.posts-item-list {

  &__content {
    border: 1px solid var(--blue-lighten-5);
    border-radius: 8px;
  }

  &__title {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--blue-lighten-5);
    color: var(--grey-darken-5);
  }

  &__body {
    line-height: 1.3;
  }

  &__btn {
    min-height: 36px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    background: transparent;
    color: var(--blue-lighten-5);
    border: 2px solid var(--blue-lighten-5);
    border-radius: 24px;

    &:hover {
      border: 2px solid  var(--grey-darken-5);
      color: var(--grey-darken-5);
    }
  }
}
</style>