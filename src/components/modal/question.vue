<template>
  <v-dialog
    v-model="visible"
    
    width="720"
  >
    <div class="question modal">
      <div class="cont">
        <div class="title-text">현재 <span>로그인 상태를 종료</span>하고 메인으로 돌아가시겠습니까?</div>
        <p>서브텍스트입니다.</p>
        
      </div>
      <div class="bottom">
        <v-btn text class="cancle" @click="handle(false)">취소</v-btn>
        <div class="v-divider" />
        <v-btn text class="ok" @click="handle(false)">확인</v-btn>
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
  .bottom{
    background:#D22828;
  }
}

</style>