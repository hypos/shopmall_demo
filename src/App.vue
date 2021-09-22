<template>
  <div>
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

    <div id="nav">
      <router-link class="tab-bar-item" to="/">
        <div class="icon">
          <i class="iconfont icon-liuliangyunpingtaitubiao02"></i>
        </div>
        <div>Home</div>
      </router-link>
      <router-link class="tab-bar-item" to="/category">
        <div class="icon"><i class="iconfont icon-class"></i> <br /></div>
        <div>Category</div>
      </router-link>
      <router-link class="tab-bar-item" to="/shopcart">
        <div class="icon">
          <van-badge :content="count" max="100">
            <i class="iconfont icon-shoppingcart-fill"></i> <br />
          </van-badge>
        </div>
        <div>ShopCart</div>
      </router-link>
      <router-link class="tab-bar-item" to="/profile">
        <div class="icon"><i class="iconfont icon-wode"></i> <br /></div>
        <div>Profile</div>
      </router-link>

      <!-- <router-link to="/about">About</router-link> |
    <router-link to="/vhome">vHome</router-link> -->
    </div>
    <div id="tip">请在开发者模式下体验该项目</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, onBeforeMount, computed } from "vue";
export default {
  created() {
    console.log("app=>created");
  },
  beforeCreate() {
    console.log("app=>beforeCreate");
  },
  updated() {
    console.log("app=>updated");
  },
  beforeUpdate() {
    console.log("app=>beforeUpdate");
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      console.log("app=>onBeforeMount");
    });
    onMounted(() => {
      console.log("app=>onMounted");
    });
    const count = computed(() => {
      let r = store.state.cartCount;
      return r == 0 ? "" : r;
    });
    return {
      store,
      count,
    };
  },
};
</script>

<style lang="scss">
@import "assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tip {
  position: fixed;
  top: 32px;
  left: 40px;
  color: black;
  font-size: 12px;
  z-index: 99;
}
#nav {
  // padding: 30px;
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.tab-bar-item {
  flex: 1;
  height: 50px;
  font-size: var(--font-size);
}

.icon {
  width: 24px;
  height: 24px;
  margin-top: 8px;
  display: inline-block;
}
</style>
