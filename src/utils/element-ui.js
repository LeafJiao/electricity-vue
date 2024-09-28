import Vue from 'vue'
import {
  Button,
  Select,
  Form,
  Input,
  FormItem,
  Carousel,
  CarouselItem,
  Image,
  Row,
  Col,
  Divider,
  Avatar,
  Pagination,
  Link,
  Message,
  Badge,
  MessageBox,
  Popconfirm,
  Notification,
  Drawer,
  Empty,
  PageHeader,
  Backtop,
  Descriptions,
  DescriptionsItem,
  Tag,
  Upload,
  Statistic,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Card
} from 'element-plus'

Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Avatar)
Vue.use(Pagination)
Vue.use(Link)

// Vue.use(Message)    这样写的话每次刷新页面都会自动弹出一条信息
Vue.component(Message.name, Message)
Vue.prototype.$message = Message
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.component(Notification.name, Notification)
Vue.prototype.$notify = Notification

Vue.use(Badge)
Vue.use(Popconfirm)
Vue.use(Drawer)
Vue.use(Empty)
Vue.use(PageHeader)
Vue.use(Backtop)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(Statistic)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Card)
