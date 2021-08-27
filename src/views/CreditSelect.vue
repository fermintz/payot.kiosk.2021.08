<template>
  <div class="creditSelect">
    <MyPointBox />

    <div class="page-title">
      <h2>
        포인트를 충전할 결제방법을 선택해주세요
      </h2>
      <p>
        충전방법에 따라 포인트 적립혜택이 다를 수 있습니다.
      </p>
    </div>

    <div class="divider" />

    <div class="credit-btns">
      <dl class="cash">
        <dt v-ripple @click="$router.push('pointSelect')">
          <div class="credit_img">
            <img src="@/assets/img/credit_cash.png">
          </div>
          <div class="point">
            <span>10%</span>
            <label>추가적립</label>
          </div>
        </dt>
        <dd>현금으로 결제</dd>
      </dl>
      <dl class="card">
        <dt v-ripple>
          <div class="credit_img">
            <img src="@/assets/img/credit_card.png">
          </div>
          <div class="point">
            <span>5%</span>
            <label>추가적립</label>
          </div>
        </dt>
        <dd>카드로 결제</dd>
      </dl>
    </div>

  </div>
</template>

<script>
import MyPointBox from '@/components/myPointBox'

export default {
  components:{
    MyPointBox
  },
}
</script>

<style lang="scss" scoped>

.divider{
  height:3px;
  background:#e2e2e2;
  margin:90px 0;
}

.creditSelect{
  height:100%;


  .credit-btns{
    display:flex;
    align-items: center;

    dl{
      flex:1;
      
      dt{
        position: relative;
        background:#e2e2e2;
        border-radius:999px;
        margin-top:30px;
        z-index:1;

        .credit_img{
          position: absolute;
          display:flex;
          justify-content: center;
          align-items: center;
          width:100%;
          height:100%;

        }

        .point{
          width:180px;
          height:180px;
          display:flex;
          flex-direction: column;
          justify-content:center;
          align-items: center;
          right:-15px;
          top:-15px;
          border-radius:999px;
          position:absolute;
          background:#DE0059;
          z-index:2;

          span{
            line-height:1.2;
            font-size:54px;
            font-weight:600;
            color:#fff;
          }
          label{
            font-size:27px;
            color:#fff;
          }
          
        }
      }
      dt:after{
        content:'';
        display:block;
        padding-bottom:100%;
        
      }
      dd{
        font-size:39px;
        font-weight:500;
        text-align:center;
        margin-top:45px;
      }
    }

    dl:first-child{
      margin-right:90px;
    }

    dl.cash{
      dt{background:#F5EAEE;}
    }
    dl.card{
      dt{background:#CCDCE8;}
    }
  }
}

</style>