<template>
  <div class="pageFooter">
    <div class="back-btn" v-ripple @click="$router.go(-1)">
      <v-icon>mdi-arrow-left</v-icon>
      <label>뒤로가기</label>
    </div>
    <div class="right-btns">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pageFooter{
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
</style>