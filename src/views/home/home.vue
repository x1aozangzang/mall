<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      ref="tabtop1"
      :titles="['流行','新款','精选']"
      id="tab-control"
      @tabclick="tabclick"
      v-show="istabfixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
      :pull-upload="true"
      @pullingUp="loadmore"
    >
      <home-swiper :banners="banners" @swiperimgload.once="swiperimgload"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabtop2" :titles="['流行','新款','精选']" id="tab-control" @tabclick="tabclick"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backclick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar";
import HomeSwiper from "./childcomponents/homeswiper";
import RecommendView from "./homerecommendview/recommendview";
import FeatureView from "./childcomponents/featureview";
import TabControl from "components/content/tabcontrol/tabcontrol";
import GoodsList from "components/content/goods/goodslist";
import BackTop from "../../components/content/backtop/backtop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import Scroll from "../../components/common/scroll/scroll";
import { debounce } from "../../../common/utils";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currenttype: "pop",
      isshow: false,
      taboffsettop: 0,
      istabfixed: false
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.currenttype].list;
    }
  },
  created() {
    // console.log(this);
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //获取tabcontrol的offsettop

    //3.监听item中图片加载完成

    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemimgload", () => {
      refresh();
    });
  },
  methods: {
    //网络请求的相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner.list)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    tabclick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
      this.$refs.tabtop1.currentindex = index;
      this.$refs.tabtop2.currentindex = index;
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentscroll(position) {
      //判断backtop是否显示
      this.isshow = -position.y > 1000;
      //决定tabcontrol是否吸顶
      this.istabfixed = -position.y > this.taboffsettop;
    },
    loadmore() {
      this.getHomeGoods(this.currenttype);
    },
    swiperimgload() {
      this.taboffsettop = this.$refs.tabtop2.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  z-index: 110;
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* margin-top: 44px; */
}
</style>