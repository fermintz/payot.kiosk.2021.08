<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="sheet">
      <div class="sheet-head">
        <h4><span>010-8525-4561</span> 님,</h4>
        <h2>다시 만나서 반갑습니다!</h2>
        <p>키오스크를 사용하기 위한 비밀번호를 입력해주세요</p>
        <div class="password-find-btn" v-ripple>
          <label>비밀번호 찾기</label>
          <v-icon>mdi-arrow-right</v-icon>
        </div>
        <v-btn icon @click="handle(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="sheet-cont">
        <div class="left-cont">
          <h4>비밀번호 입력</h4>

          <div class="password-box">
            <span class="active"></span>
            <span class="ready"></span>
            <span></span>
            <span></span>
          </div>
          <p>
            설정한 비밀번호가 생각나지 않는 다면 [비밀번호 찾기] 버튼을 통해 임시 비밀번호를 발급 받으실 수 있습니다
          </p>
        </div>
        <NumberPad />
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
import NumberPad from '@/components/numberPad'

export default {
  components:{
    NumberPad
  },
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
.sheet{
  background:rgba(255,255,255,1);
  border-radius:60px 0 0 0;

  .sheet-head{
    position: relative;
    padding:90px 60px;
    
    h4{
      margin-bottom:15px;
      span{
        color:#0085DE;
        font-weight:500;
        font-size:48px;
      }
    }

    p{
      font-size:30px;
      margin-top:30px;
    }
    
    .password-find-btn{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-top:45px;
      width:360px;
      height:70px;
      border-radius:12px;
      border:3px solid #c2c2c2;
      padding:0 15px;

      label{
        font-size:30px;
      }
      .v-icon{
        font-size:36px;
      }
    }

    .v-btn{
      position: absolute;
      right:45px;
      top:45px;
      background:#292929;
      width:100px;
      height:100px;
      .v-icon{font-size:50px;color:#fff;}
    }
  }
  .sheet-cont{
    display:flex;
    justify-content: space-between;
    padding:90px 60px;
    height:800px;
    background:#EEF2F5;
    border-radius:0 90px 0 0;

    .left-cont{
      flex:1;
      margin-right:100px;
      h4{
        margin-bottom:60px;
      }

      .password-box{
        width:100%;
        display:flex;

        span{
          display:flex;
          justify-content: center;
          align-items: center;
          width:80px;
          background:#fff;
          border-radius:15px;
          margin-right:20px;
          height:80px;
          outline: none;
          border:3px solid #c2c2c2;
          padding:0 10px;
          text-align:center;
        }

        span.active:after{
          content:'';
          width:20px;
          height:20px;
          background:#DE0059;
          border-radius:10px;
        }

        span.ready{
          animation: inputReady 1s infinite;
        }

        @keyframes inputReady {
          0%{
            border-color:#c2c2c2;
          }
          50%{
            border-color:#DE0059;
          }
          100%{
            border-color:#c2c2c2;
          }  
        }
      }

      p{
        font-size:28px;
        margin-top:45px;
      }
      
    }
  }
}
</style>