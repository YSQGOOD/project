<template>
  <div class="kerneldao-page">
    <div class="header">
      <div class="logo">
        <img src="@/assets/svg/s3/logo.svg" alt="KernelDAO Logo" />
      </div>
      <div class="tab">
        <span class="tab-item">Products</span>
        <span class="tab-item">Networks</span>
        <span class="tab-item">AVS</span>
        <span class="tab-item">About</span>
        <span class="tab-item">Insights</span>
      </div>
      <span class="btn">Restake</span>
    </div>
    <div class="row1">
      <div class="left">
        <h1>Maximize ETH Earnings with Kelp & Gain</h1>
        <p>Restake & Earn on 10 chains</p>
        <div class="btn-group">
          <span class="btn active">Restake</span>
          <span class="btn">Explore Gain</span>
        </div>
        <div class="sum" style="display: flex;">
          <div class="text-box" style="margin-right: 20%;">
            <div class="text">$1.82B</div>
            <div class="text-s">TVL</div>
          </div>
          <div class="text-box">
            <div class="text">20%</div>
            <div class="text-s">Earn upto APR</div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/svg/s3/bigBg.svg" alt="Image" />
      </div>
    </div>
    <div class="row2">
      <div class="col1 col">
        <h2>Restake</h2>
        <ul>
          <li>Deposit ETH, stETH, or ETHx and get rsETH</li>
          <li>Maximise rewards through 100+ DeFi opportunities</li>
          <li>Earn Kernel Points & EigenLayer Points</li>
          <li>Restake on 10+ Networks</li>
        </ul>
      </div>
      <div class="col2 col">
        <h2>Gain</h2>
        <ul>
          <li>Get top Airdrop & higher rewards</li>
          <li>Earnings on Autopilot</li>
          <li>Accepts ETH, stETH, ETHx, or rsETH</li>
          <li>Double the rewards with DeFi</li>
        </ul>
      </div>
      <div class="col3 col">
        <h2>Institutions</h2>
        <ul>
          <li>Investment Strategies on 10+ Networks</li>
          <li>Top DeFi opportunities across Restaking & Gain</li>
        </ul>
      </div>
    </div>
    <div class="row3">
      <div class="col">
        <h2>Ecosystem <br/> Partners</h2>
        <div class="tab">
          <span class="tab-item active">L2 chains</span>
          <span class="tab-item">DeFi partners</span>
          <span class="tab-item">AVSs</span>
          <span class="tab-item">Operators</span>
        </div>
      </div>
        <div
          class="ad-scroller"
          @mouseenter="pauseScrolling"
          @mouseleave="resumeScrolling"
        >
          <div class="ad-track" :style="trackStyle">
            <!-- 原始广告组 -->
            <div
              v-for="(ad, index) in ads"
              :key="index"
              class="ad-item"
              :class="{ hovered: hoveredId === ad.id }"
              @mouseenter="hoveredId = ad.id"
              @mouseleave="hoveredId = null"
            >
              <img :src="ad.icon" />
              <div class="ad-label">{{ ad.name }}</div>
            </div>

            <!-- 重复广告组实现无缝循环 -->
            <div
              v-for="ad in ads"
              :key="ad.id + '_dup'"
              class="ad-item"
              :class="{ hovered: hoveredId === ad.id }"
              @mouseenter="hoveredId = ad.id"
              @mouseleave="hoveredId = null"
            >
              <img :src="ad.icon" />
              <div class="ad-label">{{ ad.name }}</div>
            </div>
          </div>
        </div>
    </div>
    <div class="row4">
      <div class="title">Security</div>
      <div class="content">
        <div class="left">
          <h2>Audits</h2>
          <p>Protected and Verified by trusted auditors</p>
          <div class="btn">
            <img src="@/assets/svg/s3/arrow.svg" alt="Bug Bounty" />
          </div>
        </div>
        <div class="right">
          <h2>Bug Bounty</h2>
          <p>Secure Kelp, earn up to $250K</p>
          <div class="btn">
            <img src="@/assets/svg/s3/arrow.svg" alt="Bug Bounty" />
          </div>
        </div>
      </div>
    </div>
    <div class="row5">
      <div class="title">Private</div>
      <div class="title">Sale Partners</div>
      <div class="img-box">
        <div v-for="item in parenters" :key="item.id" class="partner-item">
          <img :src="item.icon" alt="Partners" />
        </div>
      </div>
    </div>
    <div class="row6">
      <div class="title">Stay updated with Kelp</div>
      <div class="sub-title">Join a community of 200k+ users and never miss out on exclusive rewards</div>
      <div class="search">
        <input placeholder="Email address"/>
        <div class="btn">Sign up</div>
      </div>
      <div class="footer">
        <div class="footer-content">
          <div class="logo">
            <img class="blogo" src="@/assets/svg/s3/dlogo.svg" alt="logo" />
            <div class="icon-box">
              <div>
                <img src="@/assets/svg/s3/i1.svg" alt="" />
              </div>
              <div>
                <img src="@/assets/svg/s3/i2.svg" alt="" />
              </div>
              <div>
                <img src="@/assets/svg/s3/i3.svg" alt="" />
              </div>
              <div>
                <img src="@/assets/svg/s3/i4.svg" alt="" />
              </div>
            </div>
            <div class="btn">Restake now</div>
          </div>
          <div class="text-box">
            <div class="title">Products</div>
            <div class="sub-title">Restake</div>
            <div class="sub-title">Gain</div>
            <div class="sub-title">Institutions</div>
          </div>
          <div class="text-box">
            <div class="title">Netwoks</div>
            <div class="sub-title">Ethereum</div>
            <div class="sub-title">OP Mainnet</div>
            <div class="sub-title">ZKsync Era</div>
            <div class="sub-title">Base</div>
            <div class="sub-title">Arbitrum One</div>
            <div class="sub-title">Linea Mainnet</div>
            <div class="sub-title">Scroll</div>
          </div>
          <div class="text-box box">
            <div class="title row">AVS</div>
            <div class="title row">About</div>
            <div class="cl">
              <div class="title">Insights</div>
              <div class="sub-title">Docs</div>
              <div class="sub-title">Litepaper</div>
              <div class="sub-title">Blog</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div>© Copyright 2025 Kelp Dao. All rights reserved.</div>
          <div>Terms of service | Privacy policy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const ads = ref([]);
const adsName = ref([
  "Arbitrum",
  "Blast",
  "Linea",
  "Scroll",
  "zkSync",
  "X layer",
  "Optimism",
  "Base",
  "Mode",
]);
for (let i = 1; i <= 9; i++) {
  ads.value.push({
    name:adsName.value[i - 1],
    id: i,
    icon: new URL(`../../assets/svg/s3/e${i}.svg`, import.meta.url).href,
  });
}

const parenters = ref([])

for (let i = 1; i <= 18; i++) {
  parenters.value.push({
    id: i,
    icon: new URL(`../../assets/svg/s3/p${i}.svg`, import.meta.url).href,
  });
}

const scrollPosition = ref(0);
const isPaused = ref(false);
const hoveredId = ref(null);
const animationId = ref(null);
const scrollSpeed = 60; // 滚动速度(像素/秒)

// 计算轨道样式
const trackStyle = computed(() => {
  return {
    transform: `translateX(${scrollPosition.value}px)`,
    transition: isPaused.value ? "none" : "transform linear",
  };
});

// 滚动逻辑
const scrollAds = () => {
  if (!isPaused.value) {
    scrollPosition.value -= scrollSpeed / 60; // 每帧移动距离

    // 当滚动完一组广告后，重置位置实现无缝循环
    const itemWidth = 128; // 每个广告项的宽度(200px内容 + 30px间距)
    const totalWidth = itemWidth * ads.value.length;
    if (Math.abs(scrollPosition.value) >= totalWidth) {
      scrollPosition.value += totalWidth;
    }
  }

  animationId.value = requestAnimationFrame(scrollAds);
};

const pauseScrolling = () => {
  isPaused.value = true;
};

const resumeScrolling = () => {
  isPaused.value = false;
};

onMounted(() => {
  scrollAds();
});

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
});
</script>

<style scoped>
.kerneldao-page {
  /* height: 100vh; */
  background: #d8f0f0;
}
.header {
  display: flex;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  .tab {
    .tab-item {
      margin: 0 12px;
      font-size: 16px;
      font-weight: 600;
      color: #075a5a;
      cursor: pointer;
    }
  }
  .btn {
    background: #075a5a;
    color: #fff;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 30px;
  }
}
.row1 {
  padding: 40px 8%;
  display: flex;
  .left {
    width: 50%;
    h1{
      font-size: 64px;
      font-weight: 500;
      color: #3A3636;
      width:100%;
      line-height:1.1;
    }
    p{
      color:#075A5A;
      font-size: 36px;
      line-height: 120%;
      font-weight: 400;
    }
    .btn-group{
      margin-bottom:80px;
    }
    .btn{
      margin-top:30px;
      display: inline-block;
      padding:25px 35px;
      border-radius: 40px;  
      margin-right: 35px;
      background: #ffffff;
      border:2px solid #A1B6BA;
      color: #075A5A;
      font-size: 18px;
      font-weight: 500;
    }
    .active{
      background: #075A5A;
      color: #ffffff;
    }
    .text-box{
      .text{
        font-size: 50px;
        font-weight: bold;
        color: #075A5A;
      }
      .text-s{
        font-size: 20px;
        color: #075A5A;
      }
    }
  }
  .right {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.row2 {
  display: flex;
  justify-content: center;
  /* padding: 0 5%; */
  margin: 0 6%;
  margin-top: 100px;
  .col1 {
    background-image: url("@/assets/svg/s3/1.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .col2 {
    background-image: url("@/assets/svg/s3/2.svg");
    background-size: cover;
    background-repeat: no-repeat;
        background-position: center;
  }
  .col3 {
    background-image: url("@/assets/svg/s3/3.svg");
    background-size: cover;
    background-repeat: no-repeat;
        background-position: center;
  }
  .col {
    width: 31%;
    max-width: 436px;
    border-radius: 30px;
    height: 360px;
    padding: 20px;
    margin-left: 1%;
    margin-right: 1%;
    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
    ul {
      list-style-type: disc;
      padding-left: 20px;
      li {
        color: #ffffff;
      }
      li::marker {
        color: #ffffff;
      }
    }
  }
}
.row3 {
  margin-top: 100px;
  padding: 20px 6%;
  height:500px;
  .ad-scroller {
    position: relative;
    overflow: hidden;
    padding: 20px 0;
  }
  .col{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    h2{
      font-weight: 600;
      font-size: 64px;
      color: #3A3636;
      line-height: 120%;
      letter-spacing: -3px;
    }
    .tab{
      background: #B6DFDF;
      height: 80px;
      border-radius: 40px;
      line-height:80px;
      .tab-item{
        display:inline-block;
        padding: 0px 20px;
        font-size: 20px;
        font-weight: 600;
        height: 72px;
        margin:4px 10px;
        /* border:1px solid #ffffff; */
        border-radius: 40px;
        min-width:120px;
        text-align: center;
      }
      .active{
        background: #075A5A;
        color: #ffffff;
      }
    }
  }
  .ad-track {
    display: flex;
    gap: 30px;
    will-change: transform;
    padding-left: 30px; /* 初始留白 */
  }

  .ad-item {
    width: 128px;
    flex-shrink: 0;
    /* background: white; */
    border-radius: 8px;
    overflow: hidden;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
    transition: transform 0.3s ease;
  }

  .ad-item.hovered,
  .ad-item:hover {
    transform: scale(1.2);
    .ad-label{
        display: block;
    }
    /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  }
  .ad-label{
    font-size: 17px;
    text-align: center;
    /* font-weight:600; */
    display: none;
  }
  .ad-item img {
    width: 128px;
    height: 128px;
    object-fit: cover;
  }
}
.row4{
  .title{
      font-size: 60px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 40px;
      padding-left: 6%;
    }
  .content{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color:#ffffff;
    
    h2{
      font-size:35px;
      font-weight: bold;
    }
    p{font-size:18px;}
    .left{
      width: 42%;
      max-width: 680px;
      height: 380px;
      padding: 50px;
      margin:0 1%;
      background-image: url("@/assets/svg/s3/bg1.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius:30px;
    }
    .right{
      width: 42%;
      padding: 20px;
      max-width: 680px;
      height: 380px;
      padding: 50px;
      margin:0 1%;
      background-image: url("@/assets/svg/s3/bg2.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius:30px;
    }
  }
}
.row5{
  padding: 20px 7%;
  margin-top:100px;
  .title {
    font-size: 60px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
    line-height: 1;
  }
  .img-box {
    max-width: 1248px;
    width:100%;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 20px;
    padding: 20px 0;
  }
  .partner-item{
    width:15%;
    img{
      width:100%;
    }
  }
}
.row6{
  margin-top:100px;
  .title{
    font-size: 64px;
    font-weight: 600;
    color: #3A3636;
    line-height: 120%;
    letter-spacing: -3px;
    text-align:center;
  }
  .sub-title{
    margin-top:20px;
    text-align:center;
    color:#3F6870;
    font-weight: 400;
    font-size: 16px;
  }
  .search{
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 572px;
    width:572px;
    margin: 60px auto;
    background: #ffffff;
    height: 60px;
    border-radius: 30px;
    input{
      flex: 1;
      border: none;
      padding: 0 20px;
      font-size: 16px;
      color: #333333;
      outline: none;
      border-radius: 30px 0 0 30px;
    }
    input::placeholder {
      color: #075a5a; /* 占位符颜色 */
      font-size: 16px; /* 字体大小 */
      opacity: 0.7; /* 透明度 */
      font-weight: 500; /* 字体粗细 */
    }
    .btn{
      margin-right:5px;
      border-radius: 50px;
      height: 50px;
      padding: 0 30px;
      background: #075A5A;
      color:#ffffff;
      line-height:50px;
    }
    
  }
  .footer {
      padding:0 5%;
      margin-top:150px;
      background: #1B443D;
      padding-top:100px;
      .footer-content{
        display: flex;
        /* align-items: center; */
        gap: 20px;
      }
      .title{
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 20px;
        letter-spacing: 2px;
      }
      .sub-title{
        margin-top:20px;
        text-align:center;
        color:#ffffff;
        font-weight: 400;
        font-size: 16px;
      }
      .logo{
        margin-top:40px;
        width:25%;
        .btn{
          margin-top:40px;
          width: 200px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          background: #075A5A;
          color:#ffffff;
          border-radius: 30px;
          font-size: 18px;
          font-weight: 500;
          border:2px solid #ffffff;
        }
      }
      .icon-box{
        margin-top:50px;
        display:flex;
        div{
          margin-right: 20px;
          height:40px;
          width:40px;
          border-radius: 40px;
          background:#B6DFDF;
          text-align:center;
          /* line-height: 40px; */
          padding-top:8px;
        }
      }
      .text-box{
         width:25%;
      }
    }
    .bottom{
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      font-size: 14px;
      padding-bottom: 20px;
      /* border-top: 1px solid #ffffff; */
    }
}

@media (max-width: 768px) {
  .row1 {
    flex-direction: column;
    .right{
      order:0 !important;
      width: 100%!important;
      text-align: center;
      img{
        width:40%;
      }
    }
    .left{
      order:1 !important;
      width: 100%!important;
      text-align: center;
      h1{
        margin-top: 20px;
        font-size: 36px;
      }
      p{
        font-size: 20px;
      }
      .btn{
        width: 20%; 
        min-width: 130px;
        margin-top: 20px;
        padding: 5px 5px;
      }
      .btn-group{
        margin-bottom: 40px !important;
      }
      .sum{
        justify-content: center !important;
      }
      .text-box{
        text-align: center;
        font-size: 20px !important;
        .text{
          font-size: 30px;
        }
        .text-s{
          font-size: 16px;
        }
      }
    }
  }
  .row2, .row3, .row4, .row5, .row6 {
    padding: 20px;
  }
  .col {
    width: 100%;
    margin-bottom: 20px;
  }
  .header{
    .tab{
      display:none;
    }
  }
  .row2{
    display:inline-block !important;
    width:100% !important;
    margin:0!important;
    .col{
      max-width: none!important;
      width:100% !important;
      margin-top:20px;
      margin-left: 0;
      margin-right:0;
      height:200px;

    }
    
  }
  .row3{
    margin-top:30px !important;
    height: 400px!important;
    .col{
      display:block !important;
      width:100% !important;
    }
    h2{
      font-size: 36px !important;
    }
    .tab{
      width:100% !important;
      height: 40px!important;
      line-height:0px!important;
      margin-top: 20px !important;
      .tab-item{
        padding:0 5px !important;
        font-size: 14px !important;
        height: 36px!important;
        line-height:36px!important;
        margin: 2px 3px!important;
        min-width: 50px !important;
      }
      /* transform: scale(0.5); */
    }
  }
  .row4{
    .title{
      font-size: 36px !important;
      padding-left: 0 !important;
      margin-bottom: 0px !important;
    }
    .content{
      display:inline-block !important;
      width:100% !important;
      margin:0!important;
    }
 
    .left{
      max-width: none!important;
      width:100% !important;
      height:200px!important;
      margin: 20px 0!important;
    }
    .right{
      max-width: none!important;
      width:100% !important;
      height:200px!important;
      margin: 0!important;
    }
  }
  .row5{
    .title{
      font-size: 36px !important;
      margin-bottom: 20px !important;
    }
    .img-box{
      width:100% !important;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .partner-item{
      width:25%;
    }
  }
  .row6{
    margin-top: 20px !important;
    .title{
      font-size: 36px !important;
    }
    .footer{
      margin-top: 20px !important;
      .footer-content{
        display: inline-block !important;
        width: 100% !important;
      }
      
    .logo{
      width:100% !important;
      /* text-align: center; */
    }
      .text-box{
        margin-top:20px;
        width:50% !important;
        margin-bottom: 20px !important;
        display: inline-block !important;
        float: left !important;
        .title{
          font-size: 20px !important;
        }
      }
    }
  }
  .bottom{
    width: 100% !important;
    display: inline-block !important;
    text-align: center !important;
  }
  .search{
    width:100% !important;
  }
}
@media (max-width: 960px) {
   .row1{
    .left {
      width:60%;
    }
    .right{
      width:40%;
    }

   }
  
}
</style>