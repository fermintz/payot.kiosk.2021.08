<template>
  <div class="footer">
    <div class="customer">
      고객센터 1588-1588
    </div>
    <div class="footer-btns">
      <v-btn text>키오스크 이용약관</v-btn>
      <v-btn text>개인정보 취급방침</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  display:Flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height:60px;
  width:100%;
  background:#292929;
  z-index:2;
  
  .customer{
    color:#fff;
    font-size:18px;
    margin-left:30px;
    font-family:'SCDream';
    font-weight:400;
  }

  .footer-btns{
    .v-btn{
      height:40px;
      font-size:18px;
      color:#fff;
    }
  }
}
</style>