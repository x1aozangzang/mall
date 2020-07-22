<template>
  <div class = "recommend">
      <div v-for="items in recommends" class = "recommend-item">
          <a :href="items.link">
              <img :src="items.image" alt="">
              <div>{{items.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item{
        flex:1;

    }
    .recommend-item img{
        width: 68px;
        height: 68px;
        margin-bottom: 10px;
    }
</style>