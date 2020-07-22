<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goodsitem="item"></goods-list-item></div>
</template>

<script>
import GoodsListItem from "./goodslistitem";

export default {
    components:{
        GoodsListItem
    },
  props: {
    goods: {
      type: Array,
      default() {
       return [];
      }
    }
  },
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


</style>