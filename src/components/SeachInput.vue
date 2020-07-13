<template>
    <div class="input-box">
       <div class="seach-box">
          <i class="iconfont icon-prev" @click="goBack"></i>
          <div class="icon-box">
            <input type="text" v-model="inputTxt" placeholder="想吃什么搜这里">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-guanbi"></i>
          </div>
          
          <button @click="getWord()">搜索</button>
       </div>
    </div>
</template>
<script>
export default {
  props: ["seachword"],
  data() {
    return {
      inputTxt: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      this.inputTxt = "";
    },
    getWord() {
      if (this.inputTxt == "") {
        return;
      }
      console.log("inputTxt", this.inputTxt);
      this.$emit("getWord", this.inputTxt);
      
    },
  }
};
</script>
<style lang="scss">
.input-box {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;

  width: 100%;
}
.seach-box {
  height: 60px;
  line-height: 60px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgb(236, 102, 12),
    rgb(248, 148, 54)
  );
  i {
    font-size: 20px;
    color: white;
    padding-right: 15px;
    vertical-align: middle;
  }
  .icon-box {
    display: inline-block;
    width: 65%;
    position: relative;

    input {
      width: calc(100% - 74px);
      padding: 10px 40px 10px 34px;
      font-size: 12px;
      border-radius: 5px;
      border: none;
      outline: none;
      color: #333;
      vertical-align: middle;
    }

    .icon-sousuo {
      position: absolute;
      left: 10px;
      font-size: 14px;
      padding-right: 10px;
      color: rgb(82, 82, 82);
    }
    .icon-guanbi {
      position: absolute;
      right: 0;
      font-size: 20px;
      padding-right: 10px;
      color: rgb(196, 196, 196);
    }
  }

  button {
    border: none;
    padding-left: 15px;
    font-size: 16px;
    background-color: inherit;
    outline: none;
    color: white;
    vertical-align: middle;
  }
}
</style>
