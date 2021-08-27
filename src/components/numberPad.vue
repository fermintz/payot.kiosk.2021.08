<template>
  <div class="number-pad">
    <div
      v-for="numberRow in [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]"
      :key="numberRow"
      class="number-row"
    >
      <v-btn 
        v-for="(item, index) in numberRow" 
        :key="index" 
        text
         @click="$emit('update', 'member')"
      >
        <label>{{ item }}</label>
      </v-btn>
    </div>
    <div class="number-row">
      <v-btn text class="del">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn text @click="$emit('update', 'join')">
        <label>0</label>
      </v-btn>
      <v-btn text class="reset">초기화</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
};
</script>

<style lang="scss" scoped>
.number-pad {
  .number-row {
    display: flex;

    .v-btn {
      width: 120px;
      height: 120px;
      border: 3px solid #d2d2d2;
      background: #fff;
      margin: 10px;
      border-radius: 15px;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

      label {
        font-size: 42px;
        font-family: "Roboto";
        font-weight: 600;
      }
    }
    .v-btn.del {
      .v-icon {
        font-size: 42px;
      }
    }
    .v-btn.reset {
      font-size: 24px;
    }
  }
}
</style>
