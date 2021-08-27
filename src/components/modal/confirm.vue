<template>
  <v-dialog
    v-model="visible"
    
    width="720"
  >
    <div class="question modal">
      <div class="cont">
        비밀번호를 잘못 입력하셨습니다.
      </div>
      <div class="bottom">
        <v-btn text class="ok">확인</v-btn>
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

.question{
  background:#fff;
  border-radius:0 30px 0 30px;
  overflow:hidden;
  box-shadow: 5px 5px 30px rgba(0,0,0,0.15);

  .cont{
    padding:45px;
  }
  .bottom{
    display:flex;
    justify-content: center;
    align-items: center;
    background:#D22828;

    .v-divider{
      width:3px;
      height:60px;
      background:rgba(255,255,255,0.3);
    }

    .v-btn{
      flex:1;
      height:110px;
      color:#fff;
    }
  }
}
</style>