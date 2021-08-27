<template>
  <div class="myPointBox">
    <div class="user">
      <label>나의 포인트</label>
    </div>
    <strong>2,400</strong>
  </div>
</template>

<style lang="scss" scoped>
.myPointBox{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 45px;
  border:3px solid #DE0059;
  border-radius:999px;
  height:120px;
  margin-bottom:90px;

  .user{
    label{
      font-size:30px;
    }
    span{
      font-size:42px;
      color:#0686D2;
      margin-right:10px;
    }
  }
  
  strong{
    font-size:48px;
    font-weight:600;
    color:#DE0059;
  }
  strong:after{
    content:'Point';
    font-weight:500;
    font-size:36px;
    margin-left:15px;
  }
}
</style>