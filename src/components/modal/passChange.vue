<template>
  <v-dialog
    v-model="visible"
    transition="dialog-bottom-transition"
    width="960"
    class="d-flex"
  >
    <div class="pass-change">
      <div class="left">
        <h4>임시로 발급된 비밀번호를 입력해주세요</h4>
        <div class="password-view">
          <span class="active"></span>
          <span class="ready"></span>
          <span></span>
          <span></span>
        </div>
        <p></p>
      </div>
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
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-dialog__content {
  align-items: flex-end;
}
.pass-change {
  justify-self: flex-end;
  align-self: flex-end;
  display: flex;
  background: #282934;
  padding: 60px;
  border-radius: 45px 0 45px 0;
  margin-bottom: 100px;

  .left {
    flex: 1;

    h4 {
      color: #fff;
      font-weight: 400;
      line-height: 1.4;
    }

    .password-view {
      display:flex;
      margin-top:45px;

      span {
        display:flex;
        align-items:center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background:#16171D;
        border-radius:12px;
        margin-right:20px;
      }

      span.active:after{
        content:'';
        display:block;
        width:20px;
        height:20px;
        border-radius:100%;
        background:#00BBB5
      }

      span.ready{
        border:3px solid #000;
        animation: passInputReady 1s infinite;
      }

      @keyframes passInputReady {
        0%{
          border-color:#000
        }
        50%{
          border-color:#00BBB5
        }
        100%{
          border-color:#000
        }
      }
    }
  }
  .number-pad {
    .number-row {
      display: flex;

      .v-btn {
        width: 100px;
        height: 100px;
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
}
</style>
