<template>
  <div>
    <swiper>
      <swiper-item v-for="items in banners">
        <a :href="items.link">
          <img :src="items.image" @load="imgload" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperItem} from "components/common/swiper/index";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
   methods:{
    imgload(){
      this.$emit('swiperimgload')
      
    }
  }
};
</script>