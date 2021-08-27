<template>
  <div class="product">
    <MyPoint />

    <div class="page-title">
      <h2>상품을 선택해주세요</h2>
    </div>

    <div class="seleted-machine">
      <div class="icon">
        <img src="@/assets/img/washer-icon.png">
      </div>
      <div class="text">
        <span>1번세탁기</span> 선택
      </div>
      <v-btn icon class="cancle">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </div>

    <div class="product-list">
      <div class="product-item" v-ripple v-for="item in 3" :key="item" @click="$router.push('orderDetail')">
        <div class="item-info">
          <div class="name">
            빠르고 시원한 45분 세탁
          </div>
          <div class="price">
            <span>45분</span>
            <strong>5,000 원</strong>
          </div>
        </div>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import MyPoint from '@/components/myPointBox'

export default {
  components:{
    MyPoint
  },
  data(){
    return{
      tabActive:0,
      listScroll:10,
    }
  },

  watch:{
    tabActive:()=>{
      this.virtualScroll()
    }
  },
  methods:{
    virtualScroll(){
      const machineList = document.getElementsByClassName('machine-list');
      machineList[this.tabActive].addEventListener('scroll',(e)=>{
      const scrollY =  e.target.scrollTop
      const scrollHt = machineList[this.tabActive].clientHeight
      const total = (scrollY / scrollHt) * 100

      return total
    })
    }
  },
}
</script>

<style lang="scss" scoped>
.seleted-machine{
  display:Flex;
  align-items: center;
  border:3px solid #e2e2e2;
  height:140px;
  position: relative;
  border-radius:30px;
  margin-top:45px;
  padding:0 45px;

  .icon{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:30px;
    img{
      height:60px;
    }
  }

  .text{
    flex:1;
    span{color:#0686D2;}
  }
  .v-btn{
    position: absolute;
    right:15px;
    width:90px;
    height:90px;

    .v-icon{
      font-size:60px;
      color:#d22828;
    }
  }
  
}

.product-list{
  margin-top:45px;
  border:3px solid #c2c2c2;
  background:#f2f2f2;
  height:880px;
  overflow-y:auto;
  border-radius: 30px;
  scroll-behavior: smooth;

  .product-item{
    display:flex;
    position: relative;
    background:#fff;
    border-bottom:3px solid #e2e2e2;
    padding:0 45px;
    height:190px;

    .item-info{
      display:flex;
      flex-direction: column;
      justify-content: center;
      flex:1;
      
      .price{
        display:flex;
        align-items: center;
        margin-top:10px;
        span{
          display:flex;
          justify-content: center;
          align-items: center;
          font-size:24px;
          height:45px;
          color:#fff;
          background:#292929;
          border-radius:9px;
          padding:0 15px;
        };
        strong{
          margin-left:10px;
          font-size:30px;
        }
      }
    }

    .v-icon{
      font-size:70px;
    }
  }
}

.product-list::-webkit-scrollbar{
  display:none;
}
</style>