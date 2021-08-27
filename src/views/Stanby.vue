<template>
  <div class="stanby" @click="$router.push('/')">
    <v-carousel
      :show-arrows="false"
      :touchless="true"
      :hide-delimiters="true"
      cycle
      height="100%"
      
    >
      <v-carousel-item>
        <div class="mahchine-state">
          <div class="state-title">
            <h2>세탁프리워시 광안점<br><span>장비현황</span></h2>
          </div>

          <div class="state-title-bg" />

          <div class="state-list">
            <div class="left">
              <h4>세탁기</h4>
              <v-row>
                <v-col cols="4">
                  <dl class="item active">
                    <dt>
                      <span>
                        <img src="@/assets/img/wash-active.gif">
                      </span>
                    </dt>
                    <dd>
                      <span>1번 세탁기 간다간다</span>
                      <strong>사용중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/washer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>세탁기1번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/washer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>세탁기1번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/washer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>세탁기1번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/washer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>세탁기1번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
              </v-row>
            </div>
            <div class="right">
              <h4>건조기</h4>
              <v-row>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/dryer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>건조기 1번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item active">
                    <dt>
                      <span>
                        <img src="@/assets/img/dryer-active.gif">
                      </span>
                    </dt>
                    <dd>
                      <span>건조기 2번</span>
                      <strong>사용중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/dryer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>건조기 3번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="4">
                  <dl class="item">
                    <dt>
                      <span>
                        <img src="@/assets/img/dryer-icon.png">
                      </span>
                    </dt>
                    <dd>
                      <span>건조기 4번</span>
                      <strong>대기중</strong>
                    </dd>
                  </dl>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>

        
      </v-carousel-item>
      <v-carousel-item>
        <img src="/img/stanby_slide01.png">
      </v-carousel-item>
      <v-carousel-item>
        <img src="/img/stanby_slide02.png">
      </v-carousel-item>
    </v-carousel>

    <div class="guide">
      <div class="btn">
        <label>키오스크 사용하기</label>
        <v-icon>mdi-chevron-right-circle</v-icon>
      </div>
      <p>
        화면을 터치하시면 키오스크를 사용하실 수 있습니다
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stanby{
  position: relative;
  height:100%;
  overflow:hidden;
  background:#fff;
  
  img{
    width:100%;
  }

  .guide{
    display:Flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom:0px;
    width:100%;
    height:50%;
    border-radius:60px 60px 0 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 80%);

    .btn{
      display:flex;
      justify-content: center;
      align-items: center;
      height:100px;
      border-radius:50px;
      border:6px solid #fff;
      padding:0 45px;

      label{
        font-weight:500;
        color:#fff;
      }

      .v-icon{
        margin-left:30px;
        font-size:56px;
        color:#fff;
      }
    }

    p{
      margin-top:45px;
      font-size:27px;
      font-weight:400;
      margin-bottom:150px;
      color:#fff
    }
  }
}

.mahchine-state{
  padding:60px 45px;
  height:100%;

  h2{
    color:#292929;
    font-weight:400;
    span{color:#0686D2;font-weight:600;}
  }

  .state-title{ 
    position: relative;
    margin-bottom:45px;
    z-index:2;
    p{
      font-size:30px;
      margin-top:6px;
      color:#888;
    }
  }

  .state-title-bg{
    position: absolute;
    width:100%;
    top:0px;
    left:0px;
    height:500px;
    background:#f8f8f8;
    z-index:1;
  }

  .state-list{
    position: relative;
    display:flex;
    align-items: flex-start;
    height:100%;
    max-height:1500px;
    z-index:4;
    overflow-y:auto;

    h4{
      text-align:center;
      margin-bottom:45px;
      background:#292929;
      color:#fff;
      padding:10px 0;
      border-radius:40px;
    }
    
    >div{
      fleX:1;
      border-radius:30px;
      margin-right:45px;
      height:100%;;
      padding:30px;

      .item{
        text-align:center;
        border-radius:10px;
        padding:10px;
        background:#fff;
        border:1px solid #c2c2c2;


        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width:100%;
          border-radius:100%;

          span{
            position: absolute;
            display:Flex;
            justify-content: center;
            align-items: center;
            width:100%;
            
            img{
              display:block;
              width:60px;
            }
          }
        }
        dt:after{
          content:'';
          display:block;
          padding-bottom:100%;
        }
        dd{
          margin-top:10px;
          span{
            font-size:14px;
            width:100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space:nowrap;
            display:block;
            color:#888;
          }
          strong{
            font-size:18px;
            display:block;
            font-weight:normal;
            color:#292929;
          }
        }
      }
    }
    >div:last-child{
      margin:0px;
    }

    .left{
      background:#EEF2F5;

      h4{
        background:#0686D2;
      }

      .item.active{
        background:#fff;
        border:3px solid #0686D2;

        strong{
          color:#0686D2
        }
      }
    }
    .right{
      background:#F9F2F5;

      h4{
        background:#DE0059;
      }

      .item.active{
        background:#fff;
        border:3px solid #DE0059;

        strong{
          color:#DE0059
        }
      }
    }
  }
}
</style>