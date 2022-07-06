<template>
  <div class="posts">
    <div class="posts__container">
      <div class="posts__col">
        <h2 class="posts__title mb-2">Posts</h2>
        <VOverlay v-if="_fetchingStatus === requestStatus.PENDING">
          <VLoader/>
        </VOverlay>
        <PostsList :list="_posts"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "@/components/posts/PostsList";
import {requestStatus} from '@/utils/constants';

export default {
  name: 'Posts',
  components: {PostsList},
  data() {
    return {
      requestStatus,
    }
  },

  mounted() {
    this.getPosts()
  },

  computed: {
    _posts() {
      return this.$store.state.posts.posts || []
    },
    _fetchingStatus() {
      return this.$store.state.posts.fetchingStatus;
    },
  },

  methods: {
    async getPosts() {
      await this.$store.dispatch('posts/getPosts')
    }
  }
}
</script>

<style lang="scss" scoped>

.posts {
  &__title {
    text-transform: uppercase;
    color: var(--grey-darken-3);
  }
}
</style>
