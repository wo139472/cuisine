<template>
<div class="home-box">
  <div class="home-contain">
  <div class="home">
    <div class="head-banner">
      <div class="head-box">
        <h2 class="head-title">食谱大全</h2>
        <div class="head-dec">小白学做菜必备烹饪助手</div>
      </div>
      <div class="seach-here">
          <div class="seach-txt" @click="showSeach"><i class="iconfont icon-sousuo"></i> 想吃什么搜这里</div>
        </div>      
    </div>
    <div class="menu-class">
       <ul>
          <li class="menu-icon" v-for="(i,index) in classifyMenu" :key="index">
            <i class="iconfont" :class="i.icon" @click="getid(i.claId)"></i>
            <span>{{i.name}}</span>
          </li>
       </ul>
    </div>
    <div class="selected-dishes">
      <div class="selected-title">精品好菜</div>
        <MenuItem class="mebu-item" v-for="(item,index) in seachIdArr" :key="index" :item="item"/>

    </div>
    <keep-alive include="SeachBox">
      <router-view></router-view>
    </keep-alive>
    
  </div>
  </div>
  
</div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
export default {
  name: "home",
  props: {
    seachid: {}
  },
  data() {
    return {
      classifyMenu: [
        { name: "全部分类", icon: "icon-fenlei",claId:304},
        { name: "面食", icon: "icon-mianshi",claId:326},
        { name: "果茶", icon: "icon-cha",claId:385},
        { name: "私房菜", icon: "icon-meishi2",claId:303 },
        { name: "小吃", icon: "icon-hanbao",claId:363 },
        { name: "烘焙", icon: "icon-mianbao",claId:338 },
        { name: "辅食", icon: "icon-fushi",claId:319 },
        { name: "下饭菜", icon: "icon-meishi",claId:310 },
        { name: "海鲜", icon: "icon-haixian",claId:312 },
        { name: "西餐", icon: "icon-hongjiu" ,claId:253}
      ],
      seachIdArr: [],
      classid:''
    };
  },
  methods: {
    getClassId() {
      for (let i = 0; i < 10; i++) {
        var menuId = Math.ceil(Math.random() * 771);
        if (menuId == 0) {
          menuId == 1;
        }
        this.seachIdArr = [...this.seachIdArr, menuId];
      } 
    },
    getid(claId){
      this.axios(
        `/api/recipe/byclass?classid=${claId}&start=0&num=10&appkey=5facd000c465e5dc`
      ).then(classid => {
        this.classid = classid.data.result;
        console.log("this.classid", this.classid);
        this.$router.push({ name: "seach", params: {classarr:this.classid.list}});
      });
    },
    showSeach(){
      this.$router.push({path: '/seach'})
    }
    
  },
  mounted() {
    this.getClassId();
  },
  components: {
    MenuItem,
  }
};
</script>
<style lang="scss" scope>
.home-box{
  position: relative;
  height: 100%;
}
.home-contain{
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100% - 55px);
}
.head-banner {
  width: 100%;
  height: 12rem;
  color: #fff;
  font-size: 14px;
  text-align: left;
  background-image: linear-gradient(
    120deg,
    rgb(236, 102, 12),
    rgb(248, 148, 54)
  );
  position: relative;
}
.head-box {
  height: 60px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 2rem;
}
h2 {
  line-height: 40px;
  font-size: 24px;
  font-weight: bold;
}
.seach-here {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -25px;
  height: 50px;
  margin: 0 auto;
  .seach-txt {
    margin: 0 auto;
    width: 90%;
    line-height: 50px;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    text-align: center;
    color: rgb(160, 156, 156);
    border-radius: 5px;
    border: 1px solid rgb(184, 182, 182);
    box-shadow: 0px 0px 5px 0px rgb(212, 211, 211);
  }
  i {
    color: rgb(255, 119, 29);
  }
}
.menu-class {
  margin-top: 40px;
  font-size: 12px;

  ul {
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
  }

  .menu-icon {
    float: left;
    padding: 6px 0;
    width: 20%;

    i {
      display: block;
      padding: 5px 0;
      font-size: 28px;
      color: rgb(255, 119, 29);
    }

    span {
      display: block;
    }
  }
}
.selected-dishes {
  margin: 20px auto;
  font-size: 12px;
  width: 90%;
  overflow: hidden;
}
.selected-title {
  padding: 20px 5px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.mebu-item{
  float: left;
  width: calc(50% - 10px);
  font-size: 0;
  margin: 10px 5px;
  background-color: rgba(243, 241, 241, 0.746);
}
</style>

