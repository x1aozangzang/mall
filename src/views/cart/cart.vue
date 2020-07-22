<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartlength}})</div>
    </nav-bar>
    <scroll class="content"><cart-list></cart-list></scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/navbar";
import CartList from "./childcomponents/cartlist";
import CartBottomBar from "./childcomponents/cartbottombar"


import Scroll from '../../components/common/scroll/scroll'
export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    cartlength() {
      return this.$store.state.carlist.length;
    }
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.content{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
}
</style>