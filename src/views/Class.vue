<template>
  <div class="about">
    <div class="class-top">
      <h2>分类</h2>
      <div class="seachclass">
        <div class="input-box" @click="showSeach">
        <i class="iconfont icon-sousuo"></i>想吃什么搜这里
      </div>
      </div>
      
    </div>
    <div class="class-contain">
      <div class="class-title">
        <ul class="class-ul">
          <li class="class-list" :class="{active:index==ind}" v-for="(item,index) in classify" :key="item.classid" @click="getClass(item.list,index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="contain-box" >
        <div class="scroll-box">
          <span class="contain-item" v-for="(classitem,ind) in classItem" :key="ind" @click="getid(classitem.classid)">{{classitem.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      classify: "",
      classItem: [],
      falut: 0,
      test: false,
      ind: 0,
      classid: ""
    };
  },

  methods: {
    showSeach() {
      this.$router.push({ path: "/seach" });
    },
    getClass(i, num) {
      this.classItem = i;
      this.ind = num;
    },
    getid(id) {
      this.axios(
        `/api/recipe/byclass?classid=${id}&start=0&num=10&appkey=5facd000c465e5dc`
      ).then(classid => {
        this.classid = classid.data.result;
        console.log("this.classid", this.classid);
        this.$router.push({ name: "seach", params: {classarr:this.classid.list}});
      });
    },
    _initSellerSliderScroll() {
      this.$nextTick(() => {
        // if (this.seller.pics) {
        // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        if (!this.sellerScroll) {
          // 避免页面多次实例化BScroll引起内存泄漏
          this.sellerScroll = new BScroll(".contain-box", {
            scrollaY: true, // 让滑动容器横轴滚动
            click: true
          });
        } else {
          this.sellerScroll.refresh();
        }
      });
    }
  },
  watch: {
    seller() {
      this._initSellerSliderScroll();
    }
  },
  mounted() {
    this.axios("/api/recipe/class?appkey=5facd000c465e5dc").then(classify => {
      this.classify = classify.data.result;

      if (this.classItem == "") {
        this.classItem = this.classify[0].list;
      }
    });
    this._initSellerSliderScroll();
  }
  // updated() {
  //   if(this.test==false){
  //     this.test=true;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
.about {
  position: relative;
  height: 100%;
}
.class-top {
  position: relative;
  z-index: 10;
  background-color: #fff;
  h2 {
    font-size: 18px;
    line-height: 50px;
    height: 50px;
    border-bottom: 2px solid rgb(255, 119, 29);
    box-sizing: border-box;
    background-color: rgb(255, 119, 29);
    color: #fff;
  }
  .seachclass {
    padding: 10px 0 5px;
    border: 1px solid rgb(231, 231, 231);
  }
  .input-box {
    position: relative;
    width: 90%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    background-color: rgb(231, 231, 231);
    border-radius: 10px;
    font-size: 12px;
    color: rgb(160, 160, 160);
    overflow: hidden;

    i {
      margin-right: 5px;
    }
  }
}
.class-contain {
  position: absolute;
  top: 105px;
  bottom: 60px;
  left: 0;
  width: 100%;
  font-size: 10px;
}
.active {
  color: rgb(255, 119, 29);
  background-color: #fff;
  border-left: 1px solid rgb(255, 119, 29);
}
.class-title {
  width: 80px;
  height: 100%;
  position: absolute;
  left: 0;
  font-size: 14px;
  ul {
    background-color: rgb(231, 231, 231);
    height: 100%;
  }

  .class-list {
    line-height: 40px;
  }
}
.contain-box {
  position: fixed;
  top: 105px;
  bottom: 60px;
  left: 80px;
  font-size: 12px;

  .contain-item {
    display: inline-block;
    width: 80px;
    padding: 20px 0;
    color: rgb(160, 160, 160);
  }
}
</style>
