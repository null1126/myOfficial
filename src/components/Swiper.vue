<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../state/img/1 (6).jpg">
          </div>
          <div class="swiper-slide">
            <img src="../../state/img/1 (3).jpg">
            </div>
            <div class="swiper-slide">
            <img src="../../state/img/1 (4).jpg">
            </div>
            <div class="swiper-slide">
            <img src="../../state/img/1 (5).jpg">
            </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination">
            </div> -->
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev">
            </div><div class="swiper-button-next">
            </div>-->
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar">
            </div>-->
        </div>
</template>

<script>
import Swiper from 'swiper';
export default {
mounted() {
  new Swiper ('.swiper-container', {
      loop: true, //是否循环
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      //使用定时器自动播放
      speed:300,
      autoplay : {
      delay:3000
    }
  }
)},
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
  margin: 20px auto;
}
img {
  width: 100%;
  height: 20%;
}
</style>
