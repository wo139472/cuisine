<template>
    <div class="seach-list">
        <ul class="seach-ul">
             <li class="seach-item" v-for="item in seachword" :key="item.id" @click="toDetail(item)">
                <div class="img-box">
                    <img :src="item.pic" class="auto-img">
                </div>
                <div class="seach-dec">
                    <span class="item-name">{{item.name}}</span>
                    <span class="item-tag">{{item.tag}}</span>
              </div>
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: ["seachword"],
  methods: {
    _initSellerSliderScroll() {
      this.$nextTick(() => {
        // if (this.seller.pics) {
        // 强制设置滑动容器内部content宽度 在ul元素上强制指定宽度
        if (!this.sellerScroll) {
          // 避免页面多次实例化BScroll引起内存泄漏
          this.sellerScroll = new BScroll(".seach-list", {
            scrollX: true, // 让滑动容器横轴滚动
            click: true,
            pullUpLoad: {
              threshold: 50
            }
          });
        }
        // this.scroll.on("pullingUp", () => {
        //   this.getData();
        // });
      });
    },
    toDetail(food) {
      this.$router.push({ name: "detail", params: { food, status: 1 } });
    }
  },
  watch: {
    seller() {
      this._initSellerSliderScroll();
    }
    // list:{
    //             handler:function(){
    //                 this.$nextTick(()=>{
    //                     if(this.scroll) {
    //                         //上拉
    //                         this.scroll.finishPullUp(); 
    //                         /* 
    //                         //下拉
    //                         this.scroll.finishPullDown();
    //                         */
    //                         this.scroll.refresh();
    //                     }
    //                 })
    //             },
    //             deep:true
    //         }
  },

  mounted() {
    this._initSellerSliderScroll();
  }
};
</script>
<style lang="scss" scoped>
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
