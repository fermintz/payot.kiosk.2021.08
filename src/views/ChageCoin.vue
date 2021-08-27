<template>
  <div class="chageCoin">
    <MyPoint />

    <div class="page-title">
      <h2>충전금액을 투입해주세요</h2>
      <p><span>투입된 금액만큼</span> 포인트로 전환됩니다</p>
    </div>



      <div class="coinInputForm">
        <div class="left">
          <img src="@/assets/img/cash_in.gif">
        </div>
        <div class="right">
          <dl>
            <dt>투입된금액</dt>
            <dd>20,000</dd>
          </dl>
          <p><span>* </span>한번에 <span>최대 50,000원</span> 까지 충전이 가능합니다</p>
          <v-btn text>투입완료</v-btn>
        </div>
      </div>

      <div class="bonusTable">
        <h4>구간별 적립 보너스</h4>
        <v-row>
          <v-col cols="4">
            <dl>
              <dt>1만원 미만 결제시</dt>
              <dd>1% 추가적립</dd>
            </dl>
          </v-col>
          <v-col cols="4">
            <dl>
              <dt>1만원~2만원 미만</dt>
              <dd>2% 추가적립</dd>
            </dl>
          </v-col>
          <v-col cols="4">
            <dl class="active">
              <dt>2만원~3만원 미만</dt>
              <dd>3% 추가적립</dd>
            </dl>
          </v-col>
          <v-col cols="4">
            <dl>
              <dt>3만원~4만원 미만</dt>
              <dd>4% 추가적립</dd>
            </dl>
          </v-col>
          <v-col cols="4">
            <dl>
              <dt>4만원~5만원 미만</dt>
              <dd>5% 추가적립</dd>
            </dl>
          </v-col>
        </v-row>
      </div>
    
  </div>
</template>

<script>
import MyPoint from '@/components/myPointBox'

export default {
  components:{
    MyPoint
  },
} 
</script>

<style lang="scss" scoped>

.coinInputForm{
  display:flex;
  border-top:3px solid #292929;
  border-bottom:3px solid #292929;
  padding:45px 0;
  margin-top:60px;


  .left{
    display:flex;
    justify-content: center;
    align-items: center;
    height:430px;
    background:#f2f2f2;
    padding:45px;
    border-radius:30px;
    margin-right:45px;
    img{
      height:320px;
    }
  }

  .right{
    position: relative;
    dl{
      border-bottom:3px solid #e2e2e2;
      padding-bottom:15px;
      dt{font-size:30px;}
      dd{
        text-align:right;
        font-size:50px;
        font-weight:600;
        color:#DE0059;
      }
      dd:after{
        content:'원';
        font-size:36px;
        margin-left:15px;
        font-weight:400;
        color:#292929;
      }
    }
    p{
      margin-top:30px;
      font-size:27px;

      span{color:#DE0059}
    }

    .v-btn{
      position: absolute;
      bottom:0px;
      background:#DE0059;
      color:#fff;
      width:100%;
      height:90px;
      border-radius:15px;
      animation: sparkleBtn 1s infinite linear;
    }
  }
}

.bonusTable{
  margin-top:60px;
  h4{margin-bottom:30px;}
  dl{
    position: relative;
    z-index:1;
    border:3px solid #e2e2e2;
    border-radius:15px;
    padding:20px 30px;
    dt{
      font-size:24px;
    }
    dd{
      font-size:30px;
      color:#0686D2
    }
  }

  dl.active:after{
    content:'';
    width:100%;
    height:100%;
    left:0px;
    top:0px;
    border-radius:15px;
    border:3px solid #0686D2;
    position: absolute;
    z-index:2;
  }
}
</style>