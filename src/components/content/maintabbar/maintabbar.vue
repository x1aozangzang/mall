
//把appvue里的tabbar再当做子组件 然后创建一个maintabbar父组件 再app.vue里注册 简化代码
<template>
  <tab-bar>
      <tab-bar-item path="/home" activecolor="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt=""/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activecolor="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt=""/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>


<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    components:{
      TabBar,
      TabBarItem,
    }
}
</script>


<style >

</style>