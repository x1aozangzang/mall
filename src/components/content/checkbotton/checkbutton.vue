<template>
    <div class="checkbutton" :class="{'check':value}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>


<script>
export default {
    props:{
    //    ischeck:{
    //        type:Boolean,
    //        default(){
    //            return true
    //        }
    //    } ,
       value:{
           type:Boolean,
           default(){
               return true
           }
       }
    },
    // data() {
    //     return {
    //         this.ischeck = checked
    //     }
    // },
    
}
</script>

<style scoped>
    .checkbutton{
        
        border-radius: 50%;
        border: 1px solid #aaa;
    }
    .check{
        border-color: red;
        background-color: red;
    }
</style>