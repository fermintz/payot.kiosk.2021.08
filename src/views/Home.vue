<template>
  <div class="home">
    <div class="home-top">
      <div class="wave" />
      <div class="home-head">
        <v-icon>mdi-home-outline</v-icon>
        <label>세탁프리워시 광안점</label>
      </div>
      <div class="home-visual">
        <v-carousel 
          hide-delimiter-background
          :show-arrows="false"
          :touchless="true"
          cycle
          height="100%"
        >
          <v-carousel-item>
            <img src="/img/home_slide01.png">
          </v-carousel-item>
          <v-carousel-item> 
            <img src="/img/home_slide02.png">
          </v-carousel-item>
          <v-carousel-item> 
            <img src="/img/home_slide03.png">
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="notice-box">
        <div class="notice-icon">
          <v-icon>mdi-bell-outline</v-icon>
        </div>
        <div class="notice-text">
          <marquee scrollamount="10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            incidunt voluptas aspernatur corporis? Vitae, exercitationem autem!
            Aperiam, iure voluptatem iste id velit error quisquam saepe nobis
            incidunt porro quasi quo.
          </marquee>
        </div>
      </div>
    </div>
    <!-- top -->

    <div class="home-bottom">
      <div class="menu">
        <div class="menu-btn" v-ripple @click="$router.push('userLogin')">
          <strong>충전하기</strong>
          <span>미리 금액을 충전하고 보너스포인트 받기</span>
          <div class="arrow-icon">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </div>
        <div class="menu-btn" v-ripple>
          <strong>사용하기</strong>
          <span>충전금액 사용하기<br>(충전없이 사용가능)</span>
          <div class="arrow-icon">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </div>
        <div class="menu-btn" v-ripple @click="$router.push('useList')">
          <strong>조회하기</strong>
          <span>
            나의 포인트 및 사용내역 조회하기
          </span>
          <div class="arrow-icon">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom -->

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'

export default {
  components: {
    Footer
  },
  mounted(){
  
  },
  methods:{
    timeoutMove(){
      setTimeout(()=>{
        this.$router.push('Stanby')
      }, 5000)
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .home-top {
    position: relative;
    background: #fff;
    border-radius: 0 0 0 90px;
    padding: 0 50px;
    height: 1370px;
    z-index: 2;

    .wave {
      position: absolute;
      right: -500px;
      top: -350px;
      z-index: 1;
      width: 1000px;
      height: 1000px;
      background: #de0059;
      border-radius: 400px;
      animation: wave 8s infinite linear;
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }

    .home-head {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 110px;
      display: flex;
      align-items: center;
      .v-icon {
        font-size: 60px;
        margin-right: 15px;
        color: #0686d2;
      }
      label {
        font-family: "SCDream";
        font-size: 27px;
      }
    }
    .home-visual {
      position: relative;
      width: 980px;
      height: 1040px;
      border-radius: 60px;
      border: 3px solid #e2e2e2;
      background: #fff;
      overflow: hidden;
      box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.1);
      z-index: 2;
    }

    .notice-box {
      display: flex;
      align-items: center;
      position: absolute;
      width: 980px;
      bottom: 50px;
      border-radius: 60px;
      height: 120px;
      border: 3px solid #de0059;
      overflow: hidden;
      z-index: 2;

      .notice-icon {
        width: 75px;
        height: 75px;
        background: #de0059;
        border-radius: 100%;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .v-icon {
          font-size: 40px;
          color: #fff;
          animation: noticeIcon 3s infinite;
        }
      }

      @keyframes noticeIcon {
        35% {
          font-size: 50px;
        }
        40% {
          transform: rotate(0deg);
        }
        45% {
          transform: rotate(10deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        55% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(-10deg);
        }
        65% {
          transform: rotate(10deg);
        }
        70% {
          transform: rotate(-10deg);
        }
        75% {
          font-size: 50px;
          transform: rotate(0deg);
        }
      }

      .notice-text {
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        margin: 0 30px;
        overflow: hidden;
        white-space: pre;
      }
    }
  }
  .home-bottom {
    position: relative;
    z-index: 2;
    flex: 1;
    background: rgb(0, 160, 255);
    background: linear-gradient(
      -20deg,
      rgba(0, 160, 255, 1) 0%,
      rgba(6, 134, 210, 1) 100%
    );
    border-radius: 0 120px 0 0;
    padding: 50px 50px 0 50px;

    .menu {
      display: flex;
      background: #fff;
      height: 100%;
      border-radius: 30px 90px 0 0;
      box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.2);

      .menu-btn {
        position: relative;
        height: 100%;
        padding: 36px;
        border-right: 3px solid #e2e2e2;
        flex: 1;

        strong {
          display: block;
          font-family: "SCDream";
          font-size: 39px;
          font-weight: 500;
        }
        span {
          display: block;
          margin-top: 15px;
          font-family: "SCDream";
          font-weight: 400;
          font-size: 27px;
          color: #888;
        }

        .arrow-icon {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 36px;
          right: 36px;
          width: 60px;
          height: 60px;
          background: #292929;
          border-radius: 100%;
          .v-icon {
            font-size: 42px;
            color: #fff;
          }
        }
      }
      .menu-btn:nth-child(1) {
        border-radius: 30px 0 0 0;
        strong {
          color: #de0059;
        }
        .arrow-icon {
          background: #de0059;
        }
      }
      .menu-btn:nth-child(2) {
        strong {
          color: #0686d2;
        }
        .arrow-icon {
          background: #0686d2;
        }
      }
      .menu-btn:nth-child(3) {
        border-right: 0px;
        border-radius: 0 90px 0 0;
      }
    }
  }
}

.home:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1370px;
  background: #0686d2;
  z-index: 1;
}

.footer {
  z-index: 2;
  position: relative;
  height: 60px;
  background: #000;
}
</style>
