<template>
  <div>
    <swiper class="d-swiper">
      <swiper-item v-for="item in topimgs">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topimgs: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.d-swiper {
  height: 300px;
  overflow: hidden;
}
</style>