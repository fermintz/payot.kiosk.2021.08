<template>
  <div class="wrap">
    <div class="finish order">
      <div class="finish-title">
        <v-icon>mdi-check-circle</v-icon>
        <h1>결제가 완료되었습니다</h1>
        <p><span>[1번세탁기]</span>에 금액 투입이 완료되었습니다 <br>해당 장비에서 <strong>[시작하기]</strong> 버튼을 눌러주세요</p>
      </div>

      <div class="detail">
        <dl>
          <dt>사용자번호</dt>
          <dd>010-8525-4561</dd>
        </dl>
        <dl>
          <dt>장비명</dt>
          <dd>1번 세탁기</dd>
        </dl>
        <dl>
          <dt>최종결제금액</dt>
          <dd>4,500 원</dd>
        </dl>
        <div class="divider" />
        <dl>
          <dt>사용한 포인트</dt>
          <dd>-5,000 포인트</dd>
        </dl>
        <dl class="bonusPoint">
          <dt>적립 포인트</dt>
          <dd>+500 포인트</dd>
        </dl>
        <dl class="myLastPoint">
          <dt>나의 최종포인트</dt>
          <dd>7,400 포인트</dd>
        </dl>
      </div>

      <div class="counter">
        <span>
          <strong>10초</strong>후 메인화면으로 자동 이동합니다.
        </span>
      </div>
      
      <div class="bottom">
        <dl>
          <dt v-ripple>
            <v-icon>mdi-washing-machine</v-icon>
          </dt>
          <dd>이용하기</dd>
        </dl>
        <dl>
          <dt v-ripple>
            <v-icon>mdi-database-outline</v-icon>
          </dt>
          <dd>충전하기</dd>
        </dl>
        <dl>
          <dt v-ripple @click="$router.push('/')">
            <v-icon>mdi-home-outline</v-icon>
          </dt>
          <dd>처음으로</dd>
        </dl>
      </div>
    </div>

    <div class="back-bg">
      <div class="fig fig01">
        <img src="@/assets/img/figure03.png">
      </div>

      <div class="fig fig02">
        <img src="@/assets/img/figure04.png">
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'

export default {
  components:{Footer},
}
</script>

<style lang="scss" scoped>
.wrap{
  display:flex;
  flex-direction: column;
  height:100%;
}
.finish{
  position: relative;
  z-index:2;
  flex:2;
  padding:90px;

  .finish-title{
    text-align:center;
    padding-bottom:120px;
    margin-top:60px;

    .v-icon{
      font-size:120px;
      color:#DE0059;
      margin-bottom:30px;
    }

    p{
      font-size:30px;
      margin:0px;
      margin-top:30px;

      span{
        color:#0686D2;
      }

      strong{
        color:#DE0059
      }
    }
  }

  .detail{
    padding:45px 0;
    border-top:3px solid #DE0059;
    border-bottom:3px solid #e2e2e2;

    .divider{
      height:3px;
      background:#e2e2e2;
      margin:45px 0;
    }

    dl{
      display:Flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:30px;
      dt{
        font-size:33px;
      }
      dd{
        font-size:33px;
        font-weight:500;
      }
    }

    dl.bonusPoint{
      dd{
        color:#0686D2;
      }
    }

    dl.myLastPoint{
      dd{
        color:#DE0059;
      }
    }
    
    dl:last-child{
      margin-bottom:0px;
    }
  }

  .counter{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:60px;

    span{
      background:#F8E3EB;
      border-radius:10px;
      padding:0 45px;
      height:75px;
      line-height:75px;
      border-radius:100px;
      font-size:30px;

      strong{color:#DE0059}
    }
  }

  .bottom{
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width:100%;
    left:0px;
    bottom:150px;

    dl{
      text-align:center;
      margin:0 45px;
      dt{
        display:flex;
        justify-content: center;
        align-items: center;
        width:150px;
        height:150px;
        background:#f2f2f2;
        border-radius:999px;
        .v-icon{
          font-size:72px;
        }
      }
      dd{
        margin-top:30px;
        font-size:30px;
      }
    }
  }

  
}

.back-bg{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index:1;

  .fig{
    position: absolute;
  }

  .fig01{
    top:240px;
    right:-100px;
    animation: rotete 40s infinite linear;
    opacity: 0.1;

    img{
      height:250px;
    }
  }

  .fig02{
    top:-200px;
    left:-250px;
    animation: re-rotete 60s infinite linear;
    opacity: 0.15;

    img{
      height:500px;
    }
  }

  @keyframes rotete {
    0%{
      transform:rotate(0)
    }

    100%{
      transform:rotate(360deg)
    }
  }

  @keyframes re-rotete {
    0%{
      transform:rotate(0)
    }

    100%{
      transform:rotate(-360deg)
    }
  }
}
</style>