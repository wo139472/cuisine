<template>
    <div class="contain-box">
       <div v-for="item in food" :key="item.classid">{{item}}</div>
       <div>{{food}}</div>
    </div>
</template>
<script>
export default {
  props: ["food"],
  mounted() {
      
  }
};
</script>
<style lang="scss" scoped>
.contain-box {
  position: fixed;
  top: 105px;
  bottom: 60px;
  left: 80px;
  width: 100%;
  font-size: 12px;
}
</style>
