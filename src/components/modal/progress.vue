<template>
  <v-dialog
    v-model="visible"
    width="600"

  >
    <div class="progress">
      <v-progress-circular
        color="#57C0FF"
        size="100"
        indeterminate
        width="8"
      />
      <label>자료를 불러오는 중 입니다</label>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  }
}
</script>

<style lang="scss">
.progress{
  display:Flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:60px;
  border-radius:45px;
  background:rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);

  label{
    margin-top:60px;
    color:#fff;
  }
}


</style>