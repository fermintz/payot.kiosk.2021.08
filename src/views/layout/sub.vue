<template>
  <div class="subPage">
    <div class="sub-head">
      <div class="counter">
        <span>60</span>
      </div>
      <h3>{{pageTitle}}</h3>
    </div>

    <div class="contents">
      <transition appear name="view">
        <router-view />
      </transition>
    </div>

    <div class="sub-footer">
      <div class="back-btn" v-ripple @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
        <label>뒤로가기</label>
      </div>
      <dvv class="right-btns">
        <div class="btn-item" v-ripple @click="$refs.question.handle(true)">
          <v-icon>mdi-home</v-icon>
          <label>처음으로</label>
        </div>
        <div class="btn-item" v-ripple >
          <v-icon>mdi-database-outline</v-icon>
          <label>충전하기</label>
        </div>
        <div class="btn-item" v-ripple>
          <v-icon>mdi-washing-machine</v-icon>
          <label>이용하기</label>
        </div>
        <div class="btn-item" v-ripple>
          <v-icon>mdi-magnify</v-icon>
          <label>내역조회</label>
        </div>
      </dvv>
    </div>
    <Footer />
    <Question ref="question"/>
  </div>
</template>
<script>
import Footer from '@/components/footer'
import Question from '@/components/modal/question'
export default {
  components:{
    Footer,Question
  },
  data(){
    return{
      pageTitle:this.$router.history.current.meta.title,
    }
  },
}
</script>

<style lang="scss" scoped>

.view-enter-active{
  transition:transform 1s, opacity 0.5s;  
}
.view-enter{
  transform:translateY(50px);
  opacity:0;
}

.subPage{
  display:flex;
  flex-direction: column;
  height:100%;
  background: #0686D2;
  z-index:2;
  
  .sub-head{
    position: relative;
    z-index:2;
    display:flex;
    align-items: center;
    height:160px;
    background:#fff;
    padding:0 45px;

    .counter{
      display:flex;
      justify-content: center;
      align-items: center;
      width:100px;
      height:100px;
      position: relative;
      z-index:2;
      background:#0000002a;
      border-radius:100%;
      margin-right:30px;
      
      span{
        font-size:42px;
        font-weight:600;
        color:#fff;
      }
    }

    h3{
      position: relative;
      z-index:2;
      color:#fff;

    }
  }

  .sub-head:after{
    content:'';
    display:block;
    position: absolute;
    left:0px;
    top:0px;
    z-index:1;
    width:100%;
    height:160px;
    border-radius:0 0 0 60px;
    background: #0686D2;
  }

  .contents{
    position: relative;
    z-index:3;
    flex:1;
    background:#fff;
    border-radius:0 120px 0 0;
    padding: 60px;
  }

  .sub-footer{
    position: relative;
    z-index:2;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:160px;
    border-top:3px solid #e2e2e2;
    background:#fff;
    box-shadow: 0px -10px 30px rgba(0,0,0,0.03);

    .back-btn{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right:3px solid #e2e2e2;
      height:160px;
      width:160px;

      label{
        font-size:26px;
        margin-top:15px;
      }
      .v-icon{
        font-size:52px;
      }

    }

    .right-btns{
      display:flex;
      justify-content: flex-end;
      flex:1;
      background:#fff;
      
      .btn-item{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:140px;
        height:160px;

        .v-icon{
          font-size:52px;
        }
        label{
          font-size:22px;
          margin-top:10px;
        }
      }
    }
  }
}

.subPage:after{
  content:'';
  position: absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  display:block;
  background:#0686D2;
  z-index:1;
  
}
</style>