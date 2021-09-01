<template>
  <div class="subPage">
    <div class="sub-head">
      <div class="counter">
        <span>60</span>
      </div>
      <h3>{{pageTitle}}</h3>
    </div>

    <div class="contents">
      
        <router-view />
      
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
  
  .contents{
    position: relative;
    z-index:3;
    flex:1;
    background:#fff;
    border-radius:0 120px 0 0;
    padding: 60px;
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