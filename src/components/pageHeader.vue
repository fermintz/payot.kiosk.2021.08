<template>
  <div class="pageHeader">
    <div class="counter">
      <span>60</span>
    </div>
    <h3>페이지타이틀</h3>
  </div>
</template>

<style lang="scss" scoped>

.pageHeader{
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

.pageHeader:after{
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
</style>