// item作为单独封装的组件，在app.vue里注册后，放在了tabbar标签里，而tabbar标签是在app.vue里注册的，是app.vue的子组件，子组件模板用插槽显示，所以放在tabbar标签里的item会取代slot标签
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isactive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //父传子通信数据传递
  props: {
    path: String,
    activecolor: String
  },
  data() {
    return {
    //   isactive: true
    };
  },
  computed:{
      isactive(){
          return this.$route.path.indexOf(this.path) !==-1
      },
      activestyle(){
          return this.isactive ? {color:this.activecolor} : {}
      }
  },
  methods: {
    itemClick() {
      if (this.$route.path === this.path) {
        return;
      } else {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>