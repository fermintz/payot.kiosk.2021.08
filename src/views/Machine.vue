<template>
  <div class="machine">
    <MyPoint />

    <div class="page-title">
      <h2>장비를 선택해주세요</h2>
    </div>

    <div class="contents">
      <div class="tabs">
        <div 
          class="tab-btn" 
          v-ripple 
          :class="{active: tabActive === 0}"
          @click="tabActive = 0"
        >
          <img src="@/assets/img/washer-icon.png">
          <label>세탁기</label>
          <span>Washing</span>
        </div>
        <div class="tab-btn" 
          v-ripple
          :class="{active: tabActive === 1}"
          @click="tabActive = 1"
        >
          <img src="@/assets/img/dryer-icon.png">
          <label>건조기</label>
          <span>Dryer</span>
        </div>
        <div 
          class="tab-btn" 
          v-ripple
          :class="{active: tabActive === 2}"
          @click="tabActive = 2"
        >
          <v-icon>mdi-cog</v-icon>
          <label>기타장비</label>
          <span>Etc</span>
        </div>
      </div>
      <div class="tab-cont">
        <div 
          class="machine-list" 
          v-show="tabActive === 0"
        >
          <div class="machine-item" v-for="item in 7" :key="item" v-ripple
            @click="$router.push('product')"
          > 
            <div class="cont">
              <label>
                {{item}}번 세탁기
              </label>
              <div class="infom">
                <span>용량</span>
                <strong>27kg</strong>
              </div>
            </div>
            <v-icon>
              mdi-chevron-right-circle
            </v-icon>
          </div>
        </div>

        <div 
          class="machine-list" 
          v-show="tabActive === 1"
        >
          <div class="machine-item" v-for="item in 4" :key="item" v-ripple
            @click="$router.push('product')"
          >
            <div class="cont">
              <label>
                {{item}}번 건조기
              </label>
              <div class="infom">
                <span>용량</span>
                <strong>27kg</strong>
              </div>
            </div>
            <v-icon>
              mdi-chevron-right-circle
            </v-icon>
          </div>
        </div>

        <div 
          class="machine-list" 
          v-show="tabActive === 2"
        >
          <div class="machine-item" v-ripple @click="$router.push('product')">
            <div class="cont">
              <label>
                자판기
              </label>
            </div>
            <v-icon>
              mdi-chevron-right-circle
            </v-icon>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import MyPoint from '@/components/myPointBox'

export default {
  components:{
    MyPoint
  },
  data(){
    return{
      tabActive:0,
      listScroll:10,
    }
  },

  watch:{
    tabActive:()=>{
      this.virtualScroll()
    }
  },
  methods:{
    virtualScroll(){
      const machineList = document.getElementsByClassName('machine-list');
      machineList[this.tabActive].addEventListener('scroll',(e)=>{
      const scrollY =  e.target.scrollTop
      const scrollHt = machineList[this.tabActive].clientHeight
      const total = (scrollY / scrollHt) * 100

      return total
    })
    }
  },
}
</script>

<style lang="scss" scoped>
.contents{
  display:flex;
  margin-top:60px;

  .tabs{
    display:flex;
    flex-direction: column;

    .tab-btn{
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
      width:180px;
      height:260px;
      border-radius:30px;
      margin-bottom:30px;
      background:#f2f2f2;
      opacity: 0.8;

      img{
        display:block;
        margin-top:20px;
        height:70px;
      }

      label{
        font-size:33px;
        margin-top:15px;
      }
      span{
        font-size:24px;
        color:#888;
      }

      .v-icon{font-size:70px;}
    }
    .tab-btn:last-child{
      margin-bottom:0;
    }
    .tab-btn.active{
      border:6px solid #0686D2;
      background:#fff;
      opacity: 1;
    }
  }

  .tab-cont{
    flex:1;
    margin-left:45px;
  }

  .machine-list{
    border:3px solid #e2e2e2;
    border-radius:30px;
    height:1000px;
    overflow-y:auto;
    scroll-behavior: smooth;
    background:#f2f2f2;

    .machine-item{
      display:flex;
      align-items: center;
      border-bottom:3px solid #e2e2e2;
      background:#fff;
      height:200px;
      padding:0 30px;

      .cont{
        flex:1;
        
        label{

        }
        .infom{
          display:flex;
          align-items: center;

          span{
            display:flex;
            justify-content: center;
            align-items: center;
            font-size:24px;
            height:45px;
            color:#fff;
            background:#292929;
            border-radius:9px;
            padding:0 15px;
          }
          strong{
            font-weight:500;
            margin-left:15px;
          }
        }
      }

      .v-icon{
        font-size:60px;
      }
    }
    
  }

  .machine-list::-webkit-scrollbar{
    display:none;
  }

  
}
</style>