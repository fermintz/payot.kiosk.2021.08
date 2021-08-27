<template>
  <div class="pointSelect">
    <MyPointBox />

    <div class="page-title">
      <h2>충전금액을 선택해주세요</h2>
      <p>추가로 적립되는 보너스포인트를 확인해보세요</p>
    </div>

    <div class="point-list">
      <v-row>
        <v-col cols="6" v-for="item in 6" :key="item">
          <div class="point-item" v-ripple @click="$refs.cardModal.handle(true)">
            <div class="left">
              <div class="point-img">
                <img src="@/assets/img/point.png"/>
              </div>
              <dl>
                <dt>1,000P</dt>
                <dd>1,000원</dd>
              </dl>
            </div>
            <div class="bottom">
              <span>추가</span>
              <strong>+100 포인트</strong>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <CardModal ref="cardModal"/>
    <CashModal ref="cashModal"/>
  </div>
</template>

<script>
import MyPointBox from '@/components/myPointBox'
import CardModal from '@/components/modal/cardModal'
import CashModal from '@/components/modal/cashModal'

export default {
  components:{
    MyPointBox,
    CashModal,
    CardModal,
  },
}
</script>

<style lang="scss" scoped>
.point-list::-webkit-scrollbar{
  display:none
}
.point-list{
  margin-top:60px;
  height:960px;
  overflow-x:hidden;
  overflow-y:auto;
  scroll-behavior: smooth;
  
  .point-item{
    border:3px solid #e2e2e2;
    border-radius:30px;
 

    .left{
      display:flex;
      align-items: center;
      padding:30px;
      height:180px;
    }

    .point-img{
      display:flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right:30px;
    }

    dl{
      fleX:1;
      dt{
        font-size:48px;
        font-weight:500;
      }
      dd{
        font-size:27px;
      }
    }

    .divider{
      height:3px;
      background:#e2e2e2;
      margin:30px 0;
    }

    .bottom{
      height:70px;
      border-top:3px solid #e2e2e2;
      padding:0 30px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      font-size:24px;
      span{}
      strong{
        color:#0686D2
      }
    }
  }
}
</style>