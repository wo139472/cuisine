<template>
    <div class="minebox">
        <div class="mine-top">
            <div class="left">
                <i class="iconfont icon-user2"></i>
            </div>
            <div class="right">
                <h2>立即登录</h2>
                <p>登录后可收藏喜欢的作品</p>
            </div>
        </div>
        <WhiteSpace/>
        <div class="mine-contain">
            <div class="contain">
                <i class="iconfont icon-shoucang"></i>
                <span>我的收藏</span>
            </div>
            <div class="contain">
                <i class="iconfont icon-history"></i>
                <span>浏览记录</span>
            </div>
        </div>
        <WhiteSpace/>
        <div class="haopin">
            <i class="iconfont icon-dianzan"></i>
            <span>陛下，赏个好评吧</span>
        </div>
        <WhiteSpace/>

    </div>
</template>
<script>
import WhiteSpace from "../components/WhiteSpace";
export default {
  name: "mine",
  components: {
    WhiteSpace
  }
};
</script>
<style lang="scss" scoped>
.mine-top {
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.left {
  line-height: 150px;
  padding: 0 20px;
  width: 120px;
  float: left;
  .iconfont {
    font-size: 80px;
    color: rgb(165, 165, 165);
  }
}
.right {
  float: left;
  width: calc(100% - 160px);
  h2 {
    font-size: 20px;
    text-align: left;
    margin-top: 40px;
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 30px;
    color: rgb(180, 180, 180);
  }
}
.mine-contain {
  width: 100%;
  .contain {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid rgb(223, 223, 223);
    font-size: 16px;
    text-align: left;
    i {
      color: rgb(165, 165, 165);
      padding: 0 15px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
}
.haopin {
  font-size: 16px;
  padding: 20px 0;
  width: 100%;
  text-align: left;
  i {
    color: rgb(165, 165, 165);
    padding: 0 15px;
    font-size: 20px;
    vertical-align: middle;
  }
}
</style>
