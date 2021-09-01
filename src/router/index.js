import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import UserLogin from "../views/UserLogin.vue";
import UseList from "../views/UseList.vue";
import CreditSelect from "../views/CreditSelect"
import PointSelect from "../views/PointSelect"
import Stanby from "../views/Stanby"
import FinishCahage from "../views/FinishChage"
import Machine from "../views/Machine"
import Product from "../views/Product"
import CoinInput from "../views/CoinInput"
import ChageCoin from "../views/ChageCoin"
import OrderDetail from "../views/OrderDetail"
import FinishOrder from "../views/FinishOrder"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/stanby",
    name: "Stanby",
    component: Stanby,
  },
  {
    path: "/finishChage",
    name: "finishChage",
    component: FinishCahage,
  },
  {
    path: "/finishOrder",
    name: "finishOrder",
    component: FinishOrder,
  },
  {
    path: "/userLogin",
    name: "userLogin",
    component: UserLogin,
    meta:{
      title:'회원가입 & 로그인'
    },
  },
  {
    path: "/UseList",
    name: "UseList",
    component: UseList,
    meta:{
      title:'이용내역 조회'
    },
  },
  {
    path: "/creditSelect",
    name: "creditSelect",
    component: CreditSelect,
    meta:{
      title:'결제수단선택'
    },
  },
  {
    path: "/pointSelect",
    name: "pointSelect",
    component: PointSelect,
    meta:{
      title:'포인트충전(카드)'
    },
  },
  {
    path: "/machine",
    name: "machine",
    component: Machine,
    meta:{
      title:'장비선택'
    },
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    meta:{
      title:'상품선택'
    },
  },
  {
    path: "/coinInput",
    name: "coinInput",
    component: CoinInput,
    meta:{
      title:'장비에 금액투입'
    },
  },
  {
    path: "/chageCoin",
    name: "chageCoin",
    component: ChageCoin,
    meta:{
      title:'현금으로 충전하기'
    },
  },
  {
    path: "/orderDetail",
    name: "orderDetail",
    component: OrderDetail,
    meta:{
      title:'주문확인&포인트사용'
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
