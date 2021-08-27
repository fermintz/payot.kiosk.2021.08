<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="credit_select">
   
      <h3><span>결제방법</span>을 선택</h3>
      <p>희망하시는 결제방법을 선택해주세요</p>
      
      <div class="credit_btns">
        <dl class="cash" @click="modalUpdate('cash')">
          <dt v-ripple>
            <span>
            <img src="@/assets/img/credit_cash.png"/>
            </span>
            <div class="point">
              <strong>10%</strong>
              <label>적립혜택</label>
            </div>
          </dt>
          <dd><span>현금</span>으로 결제하기</dd>
        </dl>
        <dl class="card">
          <dt v-ripple @click="modalUpdate('card')">
            <span>
            <img src="@/assets/img/credit_card.png"/>
            </span>
            <div class="point">
              <strong>5%</strong>
              <label>적립혜택</label>
            </div>
          </dt>
          <dd><span>카드</span>로 결제하기</dd>
        </dl>
      </div>   
    </div>
  </v-bottom-sheet>
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
      this.visible = value;
    },
    modalUpdate(value){
      this.$emit('creditModal', value)
    }
  },
}
</script>

<style lang="scss" scoped>
.credit_select{
  padding:60px;
  background:#fff;
  border-radius:30px 30px 0 0;
  padding-bottom:120px;

  h3{
    span{color:#DE0059}
  }

  p{
    font-size:30px;
    margin-top:5px;
    color:#888;
  }

  
  .credit_btns{
    display:flex;
    margin-top:60px;
     dl{
       flex:1;
       margin-right:60px;

       dt{
         position: relative;
         width:100%;
         background:#f2f2f2;
         border-radius:30px;
         text-align:center;

         span{
           position: absolute;
           display:flex;
           justify-content: center;
           align-items: center;
           width:100%;
           height:100%;

           img{
             display:block;
           }
         }

         .point{
            position:absolute;
            right:15px;
            top:15px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:130px;
            height:130px;
            border-radius:24px;
            background:#fff;
            
            strong{
              font-size:48px;
              font-weight:500;
              line-height:1;
              color:#DE0059;
            }
            label{
              font-size:24px;
              margin-top:10px;
            }
         }
       }
       dt:after{
         content:'';
         display:block;
         padding-bottom:100%;
       }
       dd{
         text-align:center;
         margin-top:30px;

         span{
           color:#0686D2
         }
       }
     }

     dl:last-child{
       margin-right:0px;
     }

     dl.cash{
       dt{
         background:#F5EAEE;
       }
    }
    dl.card{
       dt{
         background:#EEF2F5;
       }
    }
  }  
}
</style>