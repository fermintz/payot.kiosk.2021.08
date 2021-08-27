<template>
  <div class="login">
    <div class="login-title">
      <h2>PAYOT <br><span>KIOSK 2.0</span></h2>
      <h5>페이오티 키오스크 <span>로그인</span></h5>
    </div>
    <div class="login-form">
      <dl>
        <dt>아이디</dt>
        <dd>
          <div class="inputBox">
            <v-icon>mdi-account-circle-outline</v-icon>
            <input type="text" placeholder="아이디를 입력해주세요">
          </div>
        </dd>
      </dl>
      <dl>
        <dt>패스워드</dt>
        <dd>
          <div class="inputBox">
            <v-icon>mdi-lock-outline</v-icon>
            <input type="passowrd"  placeholder="패스워드를 입력해주세요">
          </div>
        </dd>
      </dl>

      <v-btn text>
        로그인
      </v-btn>

      <div class="company">PAYOT Corporation</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.login{
  display:Flex;
  flex-direction: column;
  height:100%;
  padding:90px;

  .login-title{
    position:relative;
    z-index:2;
    padding: 120px 0;

    h2{
      font-size:160px;
      font-weight:700;
      line-height:0.6;
      color:#fff;
      font-family:'Roboto';

      span{
        color:#FF438E;
        font-weight:700;
      }

    }

    
    h5{
      font-size:42px;
      color:#fff;
      margin-top:45px;
      font-family:'SCDream';
      font-weight:500;

      span{
        color:#FF438E;
        font-weight:500;
      }
    }
  }
  
  .login-form{
    flex:1;
    position: relative;
    z-index:2;
    background:rgba(255,255,255,0.95);
    border-radius:30px;
    box-shadow: 15px 15px 45px rgba(0,0,0,0.08);
    padding:90px;
    backdrop-filter: blur(7px);

    dl{
      margin-bottom:75px;
      dt{
        font-size:30px;
        font-family:'SCDream';
        font-weight:500;
      }
      dd{
        margin-top:15px;
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    .inputBox{
      display:flex;
      align-items: center;
      position: relative;

      input{
        width:100%;
        height:120px;
        padding:0 15px;
        padding-left:90px;
        outline: none;
        border-bottom:3px solid #292929;
      }
      input:placeholder-shown{
        font-size:30px;
      }
      input:focus{
        border-color:#FF438E;
      }
      .v-icon{
        position:absolute;
        font-size:60px;
        margin-right:15px;
      }
    }

    .v-btn{
      width:100%;
      height:120px;
      background:#292929;
      border-radius:15px;
      color:#fff;
      font-family:'SCDream';
      margin-top:60px;
    }

    .company{
      width:100%;
      text-align:center;
      position: absolute;
      bottom:60px;
      left:0px;
      color:#c2c2c2;
    }
  }
}

.login:after{
  content:'';
  position: absolute;
  top:0;
  left:0;
  background:#33343E;
  width:100%;
  height:50%;
  z-index:1;

}
</style>