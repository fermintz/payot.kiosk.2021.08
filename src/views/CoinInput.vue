<template>
  <div class="product">
    <MyPoint />

    <div class="page-title">
      <h2>투입할 금액을 입력해주세요</h2>
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

    <div class="coinInputForm">

      <dl class="inputView">
        <dt>세탁기에<br><span>투입할 금액</span></dt>
        <dd>
          2,000
        </dd>
      </dl>

      <dl class="inputBtns">
        <dt>금액입력</dt>
        <dd>
          <v-btn text class="reset">초기화</v-btn>
          <v-btn text>+100원</v-btn>
          <v-btn text>+1,000원</v-btn>
        </dd>
      </dl>
    
  
      <v-btn text class="finish">
        완료하기
      </v-btn>
  
    </div>

    <div class="priceTable">
      <h4>세탁기 상품가격표</h4>
      <div class="priceTableScroll">
        <table>
          <tr v-for="item in 3" :key="item">
            <td>표준세탁</td>
            <td>45분</td>
            <td>3,500 원</td>
          </tr>
        </table>
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

.coinInputForm{
  border:3px solid #e2e2e2;
  padding:45px;
  margin-top:45px;
  border-radius:30px;
  box-shadow: 15px 15px 45px rgba(0,0,0,0.08);

  dl{
    display:flex;
    justify-content: space-between;
    align-items: center;

    dt{
      font-size:30px;
    }
  }
  dl.inputView{
    margin-bottom:30px;
    border-bottom:3px solid #292929;
    padding-bottom:30px;
    
    dt{
      span{color:#DE0059}
    }

    dd{
      font-size:60px;
      font-weight:600;
      color:#DE0059;
    }
    dd:after{
      content:'원';
      font-size:36px;
      color:#292929;
      font-weight:400;
    }
  }
  dl.inputBtns{
    .v-btn.reset{
      color:#292929;
      border-color:#292929;
    }
    .v-btn{
      height:70px;
      border:3px solid #DE0059;
      border-bottom:6px solid #DE0059;      
      border-radius:15px;
      padding:0 30px;
      font-size:27px;
      margin-left:15px;
      color:#DE0059
    }
  }

  .v-btn.finish{
    width:100%;
    height:100px;
    color:#fff;
    border-radius:20px;
    margin-top:45px;
    background:#DE0059;
    animation: sparkleBtn 1s infinite linear;
  }

}

.priceTable{
  margin-top:60px;
  h4{
    font-size:33px;
    margin-bottom:15px;
  }
  .priceTableScroll{
    height:280px;
    overflow-y:auto;
    border-top:3px solid #292929;

    scroll-behavior: smooth;
  }
  table{
    width:100%;
    td{
      border-bottom:3px solid #e2e2e2;
      padding:15px;
      font-size:30px;
    }
    td:nth-child(2){
      text-align:right;
      width:150px;
    }
    td:nth-child(3){
      text-align:right;
      width:250px;
    }
  }
  .priceTableScroll::-webkit-scrollbar{
    display:none;
  }
}
</style>