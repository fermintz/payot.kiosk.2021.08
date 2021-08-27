<template>
  <div class="useList">
    <h2>
      <span>010-8525-4561</span> 님의<br>
      남은 포인트는 <strong>73,400</strong>점 입니다
    </h2>

    <div class="list-box">

      <div class="use-item" v-for="item in 1" :key="item">
        <div class="item-top">
          <strong class="use">사용</strong>
          <label>1번 세탁기</label>
          <span>2021.12.26 13:45:31</span>
        </div>
        <div class="item-cont">
          <div class="c-row">
            <dl class="orderPrice">
              <dt>결제금액</dt>
              <dd>7,000</dd>
            </dl>
            <dl>
              <dt>사용포인트</dt>
              <dd>7,000</dd>
            </dl>
          </div>

          <dl class="col">
            <dt>적립포인트</dt>
            <dd>+700</dd>
          </dl>
          <dl class="col myPoint">
            <dt>남은포인트</dt>
            <dd>72,500</dd>
          </dl>
        </div>
      </div>

      <div class="use-item">
        <div class="item-top">
          <strong class="chage">충전</strong>
          <span>2021.12.26 13:45:31</span>
        </div>
        <div class="item-cont">
          <div class="c-row">
            <dl class="orderPrice">
              <dt>결제금액</dt>
              <dd>50,000</dd>
            </dl>
            <dl>
              <dt>사용포인트</dt>
              <dd>0</dd>
            </dl>
          </div>

          <dl class="col">
            <dt>적립포인트</dt>
            <dd>+5,000</dd>
          </dl>
          <dl class="col myPoint">
            <dt>남은포인트</dt>
            <dd>72,500</dd>
          </dl>
        </div>
      </div>

      <div class="use-item">
        <div class="item-top">
          <strong>관리자</strong>
          <span>2021.12.26 13:45:31</span>
        </div>
        <div class="item-cont">
          <div class="c-row">
            <dl class="orderPrice">
              <dt>결제금액</dt>
              <dd>50,000</dd>
            </dl>
            <dl>
              <dt>사용포인트</dt>
              <dd>0</dd>
            </dl>
          </div>

          <dl class="col">
            <dt>적립포인트</dt>
            <dd>+5,000</dd>
          </dl>
          <dl class="col myPoint">
            <dt>남은포인트</dt>
            <dd>72,500</dd>
          </dl>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>

.useList{
  display:flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  min-height:100%;
  overflow:hidden;

  h2{
    font-weight:500;
    span{
      font-weight:600;
    }
    strong{
      font-weight:600;
      color:#0686D2;
    }
  }

  .list-box::-webkit-scrollbar{
    display:none;
  }

  .list-box{
    flex:1;
    width:100%;
    max-height:1180px;
    padding-bottom:30px;
    overflow-y:scroll;
    background:#ffff;

    .use-item{
      background:#fff;
      margin-bottom:0px;
      border:3px solid #d2d2d2;
      margin-bottom:30px;
      border-radius:15px;
      overflow:hidden;
      box-shadow: 0px 15px 30px rgba(0,0,0,0.05);

      .item-top{
        position: relative;
        display:flex;
        align-items:center;
        padding:0 30px;
        background:#EEF2F5;
        height:90px;

        strong{
          display:flex;
          align-items: center;
          justify-content: center;
          padding:0 24px;
          height:50px;
          border-radius:9px;
          background:#292929;
          font-size:27px;
          color:#fff;
        }
        strong.use{
          background:#EE2073;          
        }
        strong.chage{
          
          background:#0686D2
        }
        label{
          margin-left:20px;
          font-size:30px;
        }
        span{
          position: absolute;
          right:30px;
          font-size:27px;
        }
        
      }
      .item-cont{
        display:flex;
        align-items: center;
        padding:30px 0;

        .c-row{
          flex:3;
          border-right:3px solid #e2e2e2;
          dl{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0 30px;
            margin-bottom:5px;

            dt{
              font-size:24px;
            }
          }
          dl:last-child{margin-bottom:0px;}

          dl.orderPrice{
            dd{
              color:#d22828;
            }
          }
        }

        dl.col{
          flex:1;
          padding:0 30px;
          border-right:3px solid #e2e2e2;

          dt{font-size:24px;text-align:right;}
          dd{font-weight:500;text-align:right;}
        }
        dl.col:last-child{
          border-right:0px;
        }

        

        dl.myPoint{
          dd{
            color:#0686D2
          }
        }

      }
    }
  }
}
</style>