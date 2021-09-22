<template>
  <div class="goods">
    <goods-item v-for="good in goods" :key="good.id" :dataModel="good" />
  </div>
</template>
<script>
import GoodsItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  /* 弹性布局 */
  display: flex;
  /* 自动换行 */
  flex-wrap: wrap;
  /* 四周环绕 */
  justify-content: space-around;
  padding: 5px;
}
</style>