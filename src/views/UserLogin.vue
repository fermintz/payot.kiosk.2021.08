<template>
  <div class="userLogin">
    <div class="kiosk-guide">
      <div class="guide-title">
        <h3>[이용하기] 사용방법</h3>
      </div>
      <div class="guide-cont">
        <v-row v-show="true">
          <v-col cols="3">
            <dl>
              <dt>
                <span>
                  <img src="/img/use_01.png">
                </span>
              </dt>
              <dd>
                <label>01</label>
                <strong>세탁준비</strong>
                <span>사용하실 세탁기에 빨래감을 넣고
                  <b>코스를 선택 후 문을 꼭 닫아주세요</b>
                </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt><span><img src="/img/use_02.png"></span></dt>
              <dd>
                <label>02</label>
                <strong>키오스크 로그인</strong>
                <span>
                  키오스크에서 <b>포인트적립</b>을 위한 전화번호를 등록합니다
                </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt><span><img src="/img/use_03.png"></span></dt>
              <dd>
                <label>03</label>
                <strong>장비 및 상품선택</strong>
              <span>키오스크에서 사용하실 세탁기와 상품을 선택 후
                결제를 진행합니다.
              </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt>
                <span><img src="/img/use_04.png"></span>
              </dt>
              <dd>
                <label>04</label>
                <strong>세탁시작</strong>
                <span>결제가 완료되면 다시 세탁기로 돌아가 <b>[시작]</b>버튼을 눌러
                  세탁을 시작합니다.
                </span>
              </dd>
            </dl>
          </v-col>
        </v-row>

        <v-row v-show="false">
          <v-col cols="3">
            <dl>
              <dt>
                <span><img src="/img/cha_01.png"></span>
              </dt>
              <dd>
                <label>01</label>
                <strong>전화번호 등록</strong>
                <span>키오스크에서 포인트적립을 위한
                  회원님의 전화번호를 등록합니다
                </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt>
                <span><img src="/img/cha_02.png"></span>
              </dt>
              <dd>
                <label>02</label>
                <strong>충전방법 선택</strong>
                <span>
                  현금 또는 카드 중 충전에 사용할 결제방법을
                  선택합니다.
                </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt>
                <span><img src="/img/cha_03.png"></span>
              </dt>
              <dd>
                <label>03</label>
                <strong>충전금액 선택</strong>
              <span>충전하고자 하는 금액을 선택 또는 금액 투입 후
                충전을 진행합니다 
              </span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt>
                <span><img src="/img/cha_04.png"></span>
              </dt>
              <dd>
                <label>04</label>
                <strong>키오스크 이용</strong>
                <span>결제가 완료되면 <b>[이용하기]</b>버튼을 통해 충전된
                  포인트로 장비를 이용하실 수 있습니다. 
                </span>
              </dd>
            </dl>
          </v-col>
        </v-row>

      </div>
    </div>

    <div class="divider" />

    <div class="phone-input-form">
      <div class="phone-view">
        <h3>전화번호 입력 <span>(필수)</span></h3>
        <div class="number-view">
          <span>010 - </span>
          <v-progress-linear 
            indeterminate
            color="#0686D2"
            height="5px"
          />
        </div>
        
        <div class="guide">
          <span><b>*</b> 이용약관과 개인정보 취급방침에 동의하시면 전화번호를 입력해주세요</span>
          <span><b>*</b> 처음 이용하시는 사용자라면 전화번호를 입려하시면 즉시 가입됩니다</span>
          <span><b>*</b> 017, 011 은 가입되지 않습니다</span>
        </div>
      </div>
      <NumberPad @update="ModalOpen"/>
    </div>

    
    <JoinModal ref="joinModal" />
    <MemberModal ref="memberModal" />
    <PassChange />
    
  </div>
</template>


<script>
import JoinModal from '@/components/modal/join'
import MemberModal from '@/components/modal/member'
import NumberPad from '@/components/numberPad'
import PassChange from '@/components/modal/passChange'


export default {
  components:{
    JoinModal, NumberPad, MemberModal, PassChange,
  },
  methods:{
    ModalOpen(e){
      switch(e){
        case 'join':
          this.$refs.joinModal.handle(true)
          break;
        case 'member':
          this.$refs.memberModal.handle(true)
          break;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.userLogin{
  display:flex;
  flex-direction: column;
  height:100%;
  justify-content: center;

  .kiosk-guide{
    flex:1;
    
    .guide-title{
      margin-bottom:45px;
      h3{

      }
    }

    .guide-cont{
      dl{
        dt{
          position: relative;
          display:flex;
          justify-content: center;
          align-items: center;
          background:#e2e2e2;
          border-radius:15px;
          overflow:hidden;

          span{
            width:100%;
            position: absolute;
            
            img{
              display:block;
              width:100%;
              height:100%;
            }
          }
        }
        dt:after{
          content:'';
          display:block;
          padding-bottom:100%;
        }
        dd{
          margin-top:30px;
          label{
            font-weight:500;
          }
          strong{
            display:block;
            font-size:24px;
          }
          span{
            display:block;
            margin-top:10px;
            font-size:21px;
            color:#888;

            b{
              font-weight:normal;
              color:#DE0059;
            }
          }
        }
      }
    }
  }

  .divider{
    height:3px;
    background:#e2e2e2;
    margin:90px 0;
  }

  .phone-input-form{
    display:flex;
    justify-content: space-between;
    margin-bottom:30px;
    
    .phone-view{
       flex:1;
       margin-right:100px;

      h3{
        margin-bottom:30px;
        span{
          color:#DE0059
        }
      }

      .number-view{
      
        span{
          display:flex;
          align-items: center;
          height:100px;
          font-size:45px;
          font-weight:500;
        }

      }

      .guide{
        margin-top:45px;

        span{
          display:block;
          font-size:24px;
          margin-bottom:15px;
          color:#797979;

          b{color:#DE0059}
        }
      }
    }
    
  }
}
</style>