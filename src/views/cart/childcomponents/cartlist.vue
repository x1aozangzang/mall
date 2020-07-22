<template>
  <div class="cartlist">
    <cart-list-item v-for="(item,index) in cartlist" :key="index" :product="item"></cart-list-item>
  </div>
</template>


<script>
import CartListItem from "./cartlistitem";

export default {
  data() {
    return {
      cartlist: []
    };
  },
  components: {
    CartListItem
  },
  created() {
    this.cartlist = this.$store.state.carlist;
  }
  //   computed: {
  //     cart() {
  //       return (this.cartlist = this.$store.state.carlist);
  //     }
  //   }
};
</script>


<style scoped>
</style>