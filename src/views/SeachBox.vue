<template>
    <div class="show-seach">
       <div class="input-box">
       <div class="seach-box">
          <i class="iconfont icon-prev" @click="goBack"></i>
          <div class="icon-box">
            <input type="text" v-model="inputTxt" placeholder="想吃什么搜这里">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-guanbi" @click="clear"></i>
          </div>         
          <button @click="getWord()">搜索</button>
       </div>
    </div>
       <SeachCon :seachword="seachword" />
    </div>
</template>
<script>
import SeachCon from "../components/SeachCon.vue";
// import BScroll from "better-scroll";
export default {
  props: ["classarr"],
  data() {
    return {
      seachword: "",
      itemShow: true,
      inputTxt: "",
      num: 30,
    };
  },
  components: { SeachCon },
  methods: {
    clear() {
      this.inputTxt = "";
      this.seachword = "";
    },
    goBack() {
      this.$router.go(-1);
      this.inputTxt = "";
      this.seachword = "";
    },
    getWord() {
      if (this.inputTxt == "") {
        return;
      } else {
        this.axios(
          `/api/recipe/search?keyword=${this.inputTxt}&num=${
            this.num
          }&appkey=5facd000c465e5dc`
        ).then(seachword => {
          this.seachword = seachword.data.result.list;
          // console.log("self.seachword", this.seachword);
        });
      }
    },
    // getNum(num){
    //   this.num = num;
    // }
  },
  
  // beforeRouteEnter(to, from, next) {
  //   // console.log('to ==> ', to);
  //   // console.log('from ==> ', from);
  //   // next(vm=>{
  //   //   vm.keyw = from.params.classarr;
  //   // });
  //   next(vm => {
  //     if (from.name == "detail") {
  //       vm.seachword = to.params.vmm;
  //     }
  //   });
  // },
  watch: {
    classarr() {
      this.seachword = this.classarr;
    },
    // vmm() {
    //   this.seachword = this.vmm;

    //   // console.log('a');
    // }
  },
  mounted() {
    this.seachword = this.classarr;
  }
};
</script>
<style lang="scss" scoped>
.show-seach {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: #fff;
}
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
.hotword {
  position: absolute;
  width: 100%;
  text-align: left;
  top: 60px;

  h2 {
    padding-left: 10px;
    font-size: 16px;
    line-height: 45px;
    width: 100%;
    color: rgb(167, 166, 166);
    border-bottom: 1px solid rgb(219, 219, 219);
  }

  span {
    display: inline-block;
    line-height: 40px;
    width: 70px;
    font-size: 12px;
    text-align: center;
    color: rgb(116, 116, 116);
  }
}
.seach-list {
  position: absolute;
  height: calc(100% - 60px);
  top: 60px;
  left: 0;
  right: 0;
  font-size: 12px;
}

.seach-ul {
  margin: 0 20px;
}

.seach-item {
  width: 100%;
  padding-top: 15px;
  text-align: left;

  .img-box {
    display: inline-block;
    width: 10rem;
    height: 8rem;
    border-radius: 10px;
    overflow: hidden;
  }

  .seach-dec {
    display: inline-block;
    width: calc(100% - 10rem - 10px);
    vertical-align: top;
    margin-left: 10px;

    span {
      display: block;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.item-name {
        font-size: 18px;
        font-weight: bold;
        line-height: 30px;
        color: rgb(156, 113, 95);
      }

      &.item-tag {
        font-size: 10px;
        color: rgb(138, 138, 138);
      }
    }
  }
}
</style>



