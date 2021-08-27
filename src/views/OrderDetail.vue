<template>
  <div class="orderDetail">
    <MyPoint />

    <div class="page-title">
      <h2>주문하신 내역을 확인해주세요</h2>
      <p>사용하실 포인트가 없다면 바로 결제버튼을 터치해주세요</p>
    </div>

    <div class="user_selected">
      <dl>
        <dt>
          <label>사용자</label>
        </dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt><label>장비명</label></dt>
        <dd>3~4번 세탁기 (상/하)</dd>
      </dl>
      <dl>
        <dt><label>상품명</label></dt>
        <dd>기막히게 잘 빨리는 30분 세탁</dd>
      </dl>
    </div>

    <div class="point_use_form">
      <div class="top">
        <dl>
          <dt>
            선택한 상품금액
          </dt>
          <dd>
            6,000 원
          </dd>
        </dl>
        <v-icon>
          mdi-minus-circle
        </v-icon>
        <dl class="point">
          <dt>
            사용할 포인트
          </dt>
          <dd>
            0 P
          </dd>
        </dl>
      </div>
      <div class="point_use_btns">
        <dl>
          <dt>포인트입력</dt>
          <dd>
            <v-btn text class="reset">초기화</v-btn>
            <v-btn text class="all">전액사용</v-btn>
            <v-btn text>+100P</v-btn>
            <v-btn text>+1000P</v-btn>
          </dd>
        </dl>
      </div>
    </div>

    <div class="last_price">
      <dl>
        <dt>최종결제금액</dt>
        <dd>7,000</dd>
      </dl>
      <v-btn text @click="$refs.credit.handle(true)">
        결제하기
      </v-btn>
      <p><span>* </span>결제금액보다 <span>초과투입시 나머지 잔액은 포인트</span>로 자동적립됩니다.</p>
    </div>

    <CreditSelect ref="credit" @creditModal="modalOpen"/>
    <CashModal ref="cashModal"/>
    <CardModal ref="cardModal" />
  </div>
</template>

<script>
import MyPoint from '@/components/myPointBox'
import CreditSelect from '@/components/modal/credit'
import CardModal from '@/components/modal/cardModal'
import CashModal from '@/components/modal/cashModal'

export default {
  components:{
    MyPoint, CreditSelect, CardModal, CashModal
  },
  methods:{
    modalOpen(value){
      switch (value) {
        case 'cash':
          this.$refs.cashModal.handle(true)
          this.$refs.credit.handle(false)
          break;

        case 'card':
          this.$refs.cardModal.handle(true)
          this.$refs.credit.handle(false)
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.orderDetail{
  position: relative;
  height:100%;
}
.user_selected{
  margin-top:45px;
  padding:45px 0;
  border-top:3px solid #292929;
  border-bottom:3px solid #e2e2e2;
  dl{
    display:flex;
    align-items: center;
    margin-bottom:15px;
    dt{
      width:150px;
      font-size:27px;
      label{
        display:inline-block;
        background:#292929;
        color:#fff;
        padding:0 15px;
        height:46px;
        line-height:46px;
        border-radius:6px;
      }
    }
    dd{
      flex:1;
      font-size:30px;
    }
  }
  dl:last-child{
    margin:0px;
  }
}

.point_use_form{
  margin-top:45px;
  padding-bottom:45px;
  border-bottom:3px solid #292929;
  .top{
    display:flex;
    align-items: center;

    dl{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;
      background:#f2f2f2;
      border-radius:15px;
      padding:30px;
      height:180px;

      dt{
        font-size:30px;
      }
      dd{
        text-align:right;
        font-size:42px;
      }
    }

    dl.point{
      background:#EEF2F5;
      dd{
        color:#0686D2
      }
    }
    .v-icon{
      font-size:80px;
      margin:0 30px;
    }
  }

  .point_use_btns{
    margin-top:45px;
   
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;

      dt{font-size:30px;}
      dd{
        display:flex;
        align-items: center;

        .v-btn.reset{
          border:3px solid #292929;
          border-bottom:6px solid #292929;
          color:#292929;
        }

        .v-btn{
          height:80px;
          border:3px solid #0686D2;
          color:#0686D2;
          margin-left:15px;
          border-radius:9px;
          font-size:30px;
          border-bottom:6px solid #0686D2;
        }
      }
    }
  }
}

.last_price{
  width:100%;
  position:absolute;
  left:0px;
  bottom:0px;

  dl{
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom:30px;
    dt{
      font-size:33px;
    }

    dd{
      font-size:60px;
      color:#DE0059
    }
    dd:after{
      content:'원';
      margin-left:15px;
      font-size:33px;
    }
  }
  .v-btn{
    width:100%;
    height:100px;
    background:#DE0059;
    color:#fff;
    border-radius:15px;
    animation:sparkleBtn 1s infinite linear;
  }

  p{
    font-size:27px;
    margin:0px;
    margin-top:30px;
    color:#888;

    span{color:#D22828}
  }
}
</style>