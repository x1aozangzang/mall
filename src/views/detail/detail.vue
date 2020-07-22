<template>
  <div id="detail">
    <det-nav-bar class="detail-nav" @titleclick="titleclick" ref="nav"></det-nav-bar>
    
    <scroll class="d-content" ref="scroll" :probe-type="3" @scroll="contentscroll">
      <detail-swiper :topimgs="topimgs"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommends" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backclick" v-show="isshow"></back-top>
  </div>
</template>


<script>
import DetNavBar from "./childcomponents/detailnavbar";
import DetailSwiper from "./childcomponents/detailswiper";
import DetailBaseInfo from "./childcomponents/detailbaseinfo";
import DetailShopInfo from "./childcomponents/detailshopinfo";
import DetailGoodsInfo from "./childcomponents/detailgoodsinfo";
import DetailParamInfo from "./childcomponents/detailparaminfo";
import DetailCommentInfo from "./childcomponents/detailcommentinfo";
import GoodsList from "../../components/content/goods/goodslist";
import DetailBottomBar from './childcomponents/detailbottombar'
import BackTop from "components/content/backtop/backtop";

import Scroll from "../../components/common/scroll/scroll";
import {
  getdetail,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";

export default {
  name: "detail",
  components: {
    DetNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  data() {
    return {
      iid: null,
      topimgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themTopY: [],
      currentindex: 0,
      isshow: false,
    };
  },

  created() {
    //保存存入的iid
    this.iid = this.$route.params.id;
    // //根据iid获取详情数据
    getdetail(this.iid).then(res => {
      //获取顶部的轮播数据
      const data = res.result;
      console.log(data);
      
      this.topimgs = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商家信息
      this.shop = new Shop(data.shopInfo);
      //保存商品详情数据
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.$nextTick(() => {
        this.themTopY = [];
        this.themTopY.push(0);
        this.themTopY.push(this.$refs.param.$el.offsetTop - 44);
        this.themTopY.push(this.$refs.comment.$el.offsetTop - 44);
        this.themTopY.push(this.$refs.recommends.$el.offsetTop - 44);
        console.log(this.themTopY);
      });
    },
    titleclick(index) {
      // console.log(index, this.themTopY);
      this.$refs.scroll.scrollTo(0, -this.themTopY[index], 500);
    },
    contentscroll(position) {
      // console.log(position);
      const positionY = -position.y;
      for (let i = 0; i < this.themTopY.length; i++) {
        // console.log(i);
        if (
          (i < this.themTopY.length - 1 &&
              positionY >= this.themTopY[i] &&
              positionY < this.themTopY[i + 1]) ||
          (i === this.themTopY.length - 1 && positionY >= this.themTopY[i])
        ) {
          // console.log(i);
          this.currentindex = i;
          this.$refs.nav.currentindex = this.currentindex

        }
      }
    },
      backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentscroll(position) {
      //判断backtop是否显示
      this.isshow = -position.y > 1000;
      
    },
    addToCart(){
      //获取购物车需要展示的信息 
      const product = {}
      product.img = this.topimgs[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //将商品添加到购物车里
      this.$store.commit('addcart',product)
    }

  }
};
</script> 


<style scoped>
#detail {
  position: relative;
  /* overflow: hidden; */
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.d-content {
  height: calc(100% - 93px);
  background-color: #fff;
  margin: 0;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>