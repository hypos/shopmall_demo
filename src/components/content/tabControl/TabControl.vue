<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(title, index) in titles"
      :key="index"
      :class="{ activate: index == curIndex }"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    const curIndex = ref(0);
    const itemClick = (index) => {
      curIndex.value = index;
      emit("tabClick", index);
    };
    return {
      curIndex,
      itemClick,
    };
  },
};
</script>

<style scoped lang='scss'>
.tab-control {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #ffffff;
  z-index: 1;

  position: sticky;
  top: 45px;

  .item {
    flex: 1;
    span {
      padding: 6px;
    }
  }
  .activate {
    color: var(--color=tint);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>