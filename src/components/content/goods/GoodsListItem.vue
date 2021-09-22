<template>
  <div class="goods-item" @click.prevent="itemClick(dataModel.id)">
    <img :src="dataModel.cover_url" alt="" />
    <div class="goods-info">
      <p>{{ dataModel.title }}</p>
      <span class="price"><small>￥</small>{{ dataModel.price }}</span>
      <span class="collect">{{ dataModel.collects_count }}</span>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  props: {
    dataModel: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const router = useRouter();
    const itemClick = (id) => {
      console.log("id", id);
      router.push({ path: "/detail", query: { id } });
    };
    return {
      itemClick,
    };
  },
};
</script>

<style scoped lang='scss'>
.goods-item {
  width: 46%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      // 超出隐藏
      overflow: hidden;
      // 超出表现为...
      text-overflow: ellipsis;
      //   空白地方不换行
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: red;
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      width: 14px;
      height: 14px;
      top: -1px;
      background: url("~assets/images/collect.png") 0 0/14px 14px;
    }
  }
}
</style>