<template>
  <div>
    <nav-bar>
      <div slot="left" class="d-left" @click="backclick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="d-center">
        <div
          v-for="(title,index) in titles"
          :class="{active: index === currentindex}"
          class="title"
          @click="titleclick(index)"
        >{{title}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/navbar";


export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
      titleclick(index){
          this.currentindex = index
          this.$emit('titleclick',index)
      },
      backclick(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.d-center {
  display: flex;
  font-size: 14px;
}
.title {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.d-left img{
   margin-top: 12px;
}
</style>