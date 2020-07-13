<template>
  <div id="app">
    
    <keep-alive>
      <router-view></router-view>    
    </keep-alive>
 
    <div class="nav">
      <ul>
        <li class="item"><router-link to="/" tag="div"><i class="iconfont icon-home"></i> <span>首页</span> </router-link> </li>
        <li class="item"><router-link to="/class" tag="div"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></li>
        <li class="item"><router-link to="/mine" tag="div"><i class="iconfont icon-user1"></i><span>我的</span></router-link></li>
      </ul>         
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      num: "10",
      classify:"",
      seachword:"",
      seachclass:"",
      seachid:"",
      menuId:"",
      idLogin:'false'
    };
  },
  methods: {
  },
  mounted() {
    // let self = this
    // this.axios("/api/recipe/class?appkey=5facd000c465e5dc").then(
    //   classify =>{self.classify=classify.data.result;
    //     console.log("/classify", classify.data.result)
    //     });
    // this.axios("/api/recipe/byclass?classid=2&start=0&num=10&appkey=5facd000c465e5dc").then(
    //   seachclass =>{
    //     self.seachclass=seachclass.data.result;
    //     // console.log("/seachclass", seachclass.data.result)
    //     });
    //使用递归函数返回一个数组，用while循环不能用each，要用...实例 async
  }
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.nav {
  position: fixed;
  z-index: 4;
  padding-top: 10px;
  padding-bottom: 5px;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid rgb(167, 166, 166);
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 60px;

  ul {
    display: flex;
  }

  .item {
    flex: 1;
    
    i{
      display: block;
      font-size: 24px;
      padding-bottom: 3px;
    }

    span{
      display: block;
      font-size: 14px;
    }
  }
}

.nav .router-link-exact-active {
  color: rgb(255, 119, 29);;
}
</style>
