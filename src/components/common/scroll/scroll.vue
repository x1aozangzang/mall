<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpload: {
      type: Boolean,
      default: false
    }
  },
  date() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建scroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpload: this.pullUpload
    });
    //监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      // console.log(this.probeType);
      
      this.$emit("scroll", position);
    })
    //监听scroll滚到底部
      if (this.pullUpload) {
        this.scroll.on('pullingUp', () => {

          this.$emit('pullingUp')
        })
      }
  },
  methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){

        
        this.scroll.refresh()
      }
    }
}
</script>

<style scoped>
</style>