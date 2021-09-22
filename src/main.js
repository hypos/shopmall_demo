import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './utils/bus'

import 'vant/lib/index.css'
import { PullRefresh, List, Grid, GridItem, Popup, AddressEdit, AddressList, Icon, SubmitBar, Stepper, SwipeCell, Checkbox, CheckboxGroup, Form, Field, Tag, Button, Image as VanImage, Card, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs } from 'vant'


const app = createApp(App)
    .use(store)
    .use(router)
    .use(PullRefresh)
    .use(List)
    .use(Grid)
    .use(GridItem)
    .use(Popup)
    .use(AddressEdit)
    .use(AddressList)
    .use(Icon)
    .use(SubmitBar)
    .use(Stepper)
    .use(SwipeCell)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Form)
    .use(Field)
    .use(Tag)
    .use(Button)
    .use(VanImage)
    .use(Card)
    .use(Swipe)
    .use(SwipeItem)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Collapse)
    .use(CollapseItem)
    .use(Tab)
    .use(Tabs)
    .use(Badge)
    .use(Lazyload, {
        loading: require('./assets/images/logo.png')
    });

// 配置全局事件总线
app.config.globalProperties.bus = bus;

app.mount('#app');
