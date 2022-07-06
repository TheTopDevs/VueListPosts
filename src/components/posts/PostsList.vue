<template>
  <ul class="posts-list">
    <PostsItemList
        v-for="(item) in list"
        :key="item.id"
        :item="item"
    />
  </ul>
</template>

<script>
import PostsItemList from "@/components/posts/PostsItemList";

export default {
  name: "PostsList",
  components: {PostsItemList},
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>

.posts-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

  @include media('max', 'md') {
    grid-template-columns: 1fr;
  }
}
</style>