<template>
    <div>
      <div class="item-box" @click="showDetailView(seachid)">
        <div class="item-img">
          <img class="auto-img" :src="seachid.pic" alt="">
        </div>
        <span class="item-name">{{seachid.name}}</span>
        <span class="item-tag">{{seachid.tag}}</span>
       
      </div>
      
    </div>
    
</template>
<script>
export default {
  props: {
    item: {
      type: Number
    }
  },
  data() {
    return {
      seachid: ""
    };
  },
  methods: {
    showDetailView(food) {
      this.$router.push({ name: "detail", params: { food } });
    }
  },
  mounted() {
    let self = this;
    this.axios(
      `/api/recipe/detail?id=${this.item}}&appkey=5facd000c465e5dc`
    ).then(seachid => {
      self.seachid = seachid.data.result;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.item-box {
  text-align: left;
}
.item-img {
  overflow: hidden;
  width: 100%;
  height: 12rem;
  border-radius: 6px;
  background-color: rgb(177, 177, 177);
  font-size: 0;
}
.item-name {
  display: block;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-tag {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgb(160, 160, 160);
}
</style>
