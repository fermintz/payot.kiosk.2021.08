<template>
  <v-bottom-sheet
    v-model="visible"
  >
    <div class="sheet">
      <div class="sheet-head">
        <h4><span>010-8525-4561</span> 님,</h4>
        <h2>첫 방문을 환영합니다!</h2>
        <p>신규가입 회원은 비밀번호 생성이 필요합니다<br>아래 버튼을 통해 <span>사용하실 비밀번호를 입력</span>해주세요</p>
        
        <v-btn icon @click="handle(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        
      </div>
      <div class="sheet-cont">
        <div class="left-cont">
          <h4>새 비밀번호 등록</h4>

          <div class="password-box">
            <span class="active"></span>
            <span class="ready"></span>
            <span></span>
            <span></span>
          </div>
          <p>
            설정한 비밀번호는 변경할 수 없으며, 잃어버릴시 새로운 비밀번호를 발급 받으실 수 있습니다
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
  background:rgba(6, 134, 210, 0.7);
  backdrop-filter: blur(7px);
  border-radius:60px 0 0 0;

  .sheet-head{
    position: relative;
    padding:90px 60px;

    h4{
      margin-bottom:15px;
      color:#fff;
  
      span{
        color:#F7FF00;
        font-weight:500;
        font-size:48px;
      }
    }
    h2{
      color:#fff;

    }
    p{
      color:#fff;
      font-size:30px;
      margin-top:30px;


      span{color:#F7FF00}
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
    background:#fff;
    border-radius:0 90px 0 0;
    box-shadow: 15px -15px 60px rgba(0,0,0,0.1);

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