<template>
  <v-dialog
    v-model="visible"
    width="800"
  >
    <div class="cash-modal">
      <div class="modal-head">
        <h3>현금결제</h3>
          <div class="right">
            <div class="counter">60</div>
            <v-btn icon @click="handle(false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="modal-cont">
          <div class="guide">
            <div class="guide-img">
              <img src="@/assets/img/cash_in.gif">
            </div>
            <div class="guide-text">
              결제금액 만큼 현금을 투입해주세요
            </div>
          </div>

          <div class="order-info">
            <dl>
              <dt>결제금액</dt>
              <dd>7,000</dd>
            </dl>

            <dl class="in_cash">
              <dt>투입된 금액</dt>
              <dd>0</dd>
            </dl>
          </div>
        </div>
        <div class="bottom">
          결제금액 보다 초과 투입시 나머지 잔액은<br>포인트로 적립됩니다
        </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>


.cash-modal{
  background:#fff;
  border-radius:0px 60px 0px 60px;
  position: relative;
  overflow:hidden;
  
  .modal-head{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:180px;
    position: relative;
    z-index:2;

    h3{
      margin-left:45px;
    }

    .right{
      display:flex;
      margin-right:30px;

      .counter{
        width:105px;
        height:105px;
        background:#d22828;
        color:#fff;
        border-radius:100px;
        margin-right:15px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-weight:500;
        font-size:42px;
      }

      .v-btn{
        width:105px;
        height:105px;
        background:#292929;

        .v-icon{
          font-size:53px;
          color:#fff;
        }
      }
    }
  }
  .modal-cont{
    position: relative;
    z-index:2;
    padding:0 45px 45px 45px;

    .guide{
      background:#f2f2f2;
      border:3px solid #e2e2e2;
      border-radius:45px;
      padding:45px;
      margin-bottom:45px;
    

      .guide-img{
        display:flex;
        justify-content: center;
        align-items: center;
        padding:60px 0;

        img{
          display:block;
          height:400px;
        }
      }
      .guide-text{
        text-align:center;
        background:#fff;
        padding:15px;
        font-size:30px;
        border-radius:99px;
      }
    }
    .order-info{
      display:flex;
      align-items: center;
      dl{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        border-right:3px solid #e2e2e2;

        dt{
          font-size:30px;
        }

        dd{
          font-size:48px;
          font-weight:600;
        }
        dd:after{
          content:'원';
          font-size:36px;
          font-weight:400;
          margin-left:15px;
        }
      }

      dl.in_cash{
        dd{
          color:#d22828
        }
      }
      dl:last-child{border-right:0px;}
    }
  }

  .bottom{
    font-size:30px;
    text-align:center;
    color:#d22828;
    padding:40px;
    background:#EEE3E3;
  }

}
</style>