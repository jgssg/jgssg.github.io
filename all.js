window.onload=function(){ 
    $(".box").addClass("flipped");
    $(".box2").addClass("flipped");
  };
document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const image1 = document.getElementById('image1');
  const popup = document.getElementById('popup');
  const popupImages = document.querySelectorAll('.popup-image');

  // 图片1飞入动画
  setTimeout(() => {
  image1.style.animation = 'fly-in 1s forwards';
}, 4000);

  // 图片1飞入后，弹出窗口出现
  setTimeout(() => {
    popup.style.transform = 'translate(-50%, -90%) scale(1)';
    addPopupBackground(); // 添加背景层
  }, 5000);

  // 随机显示弹出窗口中的一张图片
  const randomIndex = Math.floor(Math.random() * popupImages.length);
  popupImages[randomIndex].style.opacity = '1';

    // 添加背景层的函数
    function addPopupBackground() {
      const popupBackground = document.createElement('div');
      popupBackground.classList.add('popup-background');
      document.body.appendChild(popupBackground);
    }

  // 动画关键帧
  const keyframes = `
  @keyframes fly-in {
    0% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 30%);
    }
  }
  `;

  // 创建动画样式
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(keyframes));
  document.head.appendChild(style);
});
