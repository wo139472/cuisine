<template>
  <div class="detail-box">
      <div class="detail-top">
        <i class="iconfont icon-prev" @click="returnFirst"></i><span class="title">{{food.name}}</span>
      </div>

      <div class="detail-fixed">
        <div class="detail-image">
          <img :src="food.pic" alt="" class="auto-img">
        </div>
        <div class="title-box">
            <span class="big-title">{{food.name}}</span>
            <span class="likeIt">收藏</span>
        </div>
        <WhiteSpace/>
        <div class="make-box">
            <div class="make-dec" v-html="food.content"></div>
            <div class="materials">用料</div>
            <div class="materials-det" v-for="(mats,index) in food.material" :key="index">
              <span class="first">{{mats.mname}}</span>
              <span class="second">{{mats.amount}}</span>
            </div> 
            <div class="todo">做法</div>
            <div class="todo-list" v-for="(todo,index) in food.process" :key="todo.__ob__.dep.id">
              <span class="process">{{index+1}}、{{todo.pcontent}}</span>
              <span class="imgbox"><img class="auto-img" :src="todo.pic" alt=""></span>
            </div>
        </div>
      </div>
      
  </div>
    
</template>
<script>
import WhiteSpace from "../components/WhiteSpace.vue";
export default {
  name: "detail",
  props: {
    food: Object,
    status
  },
  data() {
    return {
      keyw:''
    }
  },
  methods: {
    returnFirst() {
      // console.log(this.status)
      // if(this.status == 1){
      //   // console.log(this.keyw)
      //   this.$router.replace({name:"seach",params:{vmm:this.keyw}})
      // }else{
        this.$router.go(-1);
      // }
      // 
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('todetail ==> ', to);
  //   console.log('fromdetail ==> ', from);
  //   next(vm=>{
  //     if(from.params.classarr){
  //       vm.keyw = from.params.classarr;
  //     }
  //     if(from.params.vmm){
  //       vm.keyw = from.params.vmm;
  //     }
      
  //     // console.log(vm.keyw)
  //   });
  // },
  components: {
    WhiteSpace
  },
};
</script>
<style lang="scss" scoped>
.detail-box {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.detail-top {
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgb(236, 102, 12),
    rgb(248, 148, 54)
  );

  i {
    font-size: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 20px;
  }

  .title {
    font-size: 16px;
    color: #fff;
    vertical-align: top;
  }
}
.detail-fixed {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  .detail-image {
    margin: 20px auto;
    width: 90%;
    height: 22rem;
  }
}

.title-box {
  color: #333;
  font-weight: bold;
  padding-bottom: 10px;

  .big-title {
    font-size: 24px;
    display: block;
    padding: 10px;
  }
  .likeIt {
    font-size: 16px;
    display: inline-block;
    padding: 10px 30px;
    background-color: rgb(255, 119, 29);
    color: #fff;
    margin: 10px 0;
    border-radius: 5px;
  }
}
.make-box {
  margin: 20px auto;
  width: calc(100% - 40px);
  text-align: left;

  .make-dec {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1rem;
    margin-bottom: 10px;
  }
  .materials {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid rgb(190, 190, 190);
  }
  .materials-det {
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
  }
  .first {
    display: inline-block;
    width: 50%;
  }
  .second {
    display: inline-block;
    width: 50%;
    color: rgb(128, 128, 128);
  }
  .todo {
    font-size: 16px;
    font-weight: bold;
    padding: 20px 0 10px;
  }
  .todo-list {
    span {
      padding: 10px 0;
      display: block;
    }
    .process {
      font-size: 14px;
      line-height: 20px;
    }
    .imgbox{
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
