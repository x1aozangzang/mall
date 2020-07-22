<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "TarBar"
};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}

</style>