window.addEventListener('scroll', function () {
  const shortcut = document.querySelector('.shortcut');
  // 当滚动超过 0 像素时，添加 fixed 类
  if (window.scrollY > 0) {
    shortcut.classList.add('fixed');
  } else {
    shortcut.classList.remove('fixed');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const searchBox = document.querySelector('.search');
  const wenzhangElement = document.querySelector('.wenzhang');

  if (searchBox && wenzhangElement) {
    wenzhangElement.addEventListener('mouseenter', () => {
      searchBox.style.overflow = 'visible';  // 鼠标进入时，显示溢出的部分
    });

    wenzhangElement.addEventListener('mouseleave', () => {
      searchBox.style.overflow = 'hidden';  // 鼠标离开时，隐藏溢出的部分
    });
  }
});


// 修改后的滚动监听
let isActive = false;
window.addEventListener('scroll', () => {
  const shoo = document.querySelector('.shoo');
  const scrollTop = window.pageYOffset;
  const shouldActive = scrollTop > 200; // 修改为200px阈值

  if (shouldActive !== isActive) {
    shoo.classList.toggle('active', shouldActive);
    isActive = shouldActive;
  }
});

// 动态定位初始化
window.addEventListener('DOMContentLoaded', () => {
  const shortcut = document.querySelector('.shortcut');
  const shoo = document.querySelector('.shoo');
  if (shortcut && shoo) {
    const shortcutHeight = shortcut.offsetHeight;
    shoo.style.top = `${shortcutHeight}px`; // 保持与.shortcut的间距
  }
});