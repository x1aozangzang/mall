<template>
  <div class="bottombar">
    <div class="check-all">
      <check-button class="checkallbutton" :class="{'ischecked':isselectall}" @click.native="checkBtnClick"></check-button>
      <span>全选</span>
    </div >
    <div class="totalprice">合计：￥{{totalprice}}</div>
    <div class="calcuate">去计算({{checklength}})</div>
  </div>
</template>


<script>
import CheckButton from "../../../components/content/checkbotton/checkbutton";

export default {
  components: {
    CheckButton
  },
  computed: {
    totalprice() {
        return this.$store.state.carlist.filter(item => {
            return item.checked === true
        }).reduce((sum,item) => {
            return sum + item.price * item.count
        },0)
    },
    checklength(){
        return this.$store.state.carlist.filter(item => {
            return item.checked ===true
        }).length
    },
    isselectall(){
       
        if(this.$store.state.carlist.length === 0) return false
        return !(this.$store.state.carlist.filter(item => item.checked === false).length)
    }

  },
  methods:{
      checkBtnClick(){
         if(this.isselectall){//全部选中
            this.$store.state.carlist.forEach(item => item.checked = false)
         }else{
             this.$store.state.carlist.forEach(item => item.checked = true)
         }
          
      }
  }
};
</script>



<style scoped>
.bottombar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
}
.check-all {
  display: flex;
  flex: 1;
  height: 40px;
  align-items: center;
  margin-left: 10px;
}
.checkallbutton {
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid #aaa;
  background-color: #fff;
}
.totalprice{
    height: 40px;
    margin-left: 30px;
    flex: 1;
}
.calcuate{
    width: 100px;
    background-color: pink;
    flex: 1;
    text-align: center;
}
.ischecked{
    border-color: red;
    background-color: red;
}
</style>