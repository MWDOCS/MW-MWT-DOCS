<script setup lang="ts">
import 'aplayer/dist/APlayer.min.css';
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';

let APlayer: any;
let IsShow = ref(false);
let GlobalMusicList = [];

const SwitchStatus = () => {
  IsShow.value = !IsShow.value;
};

const CloseStatus = () => {
  if (IsShow.value) {
    IsShow.value = false;
  }
};

const InsertMenu = () => {
  const navCenterElm = document.querySelector('.vp-navbar-end');

  if (!navCenterElm) {
    return;
  }

  if (!document.querySelector('#MyMusic_Menu')) {
    const elm = document.createElement('div');
    elm.id = 'MyMusic_Menu';
    elm.classList.add('nav-item');
    elm.innerHTML = `<div id="MyMusic_icon" class="btnImg"></div>`; // spin="true"
    navCenterElm.appendChild(elm);
  }

  const Menu = document.querySelector('#MyMusic_Menu') as HTMLElement;
  Menu.onclick = (event) => {
    SwitchStatus();
    event.stopPropagation();
  };

  const MyMusicWrapper = document.querySelector('.MyMusic') as HTMLElement;
  MyMusicWrapper.onclick = (event) => {
    event.stopPropagation();
  };
};

const NewPlayer = () => {
  if (!APlayer) {
    return;
  }

  const Win: any = window;
  // 如果不存在盒子 则 终止
  const playElm = document.getElementById('GlobalAPlayer');

  if (!playElm) {
    return;
  }

  if (GlobalMusicList.length < 1) {
    return;
  }

  AddBtnSpin();

  // 判断是否被 APlayer 接管
  const playExist = playElm.classList.contains('aplayer');
  if (playExist) {
    return;
  }

  Win.GlobalAPlayer = new APlayer({
    container: document.getElementById('GlobalAPlayer'),
    audio: GlobalMusicList,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: '324px',
    mini: false,
    fixed: false,
    volume: 1,
    storageName: 'GlobalAPlayer',
  });

  // 让按钮旋转
  Win.GlobalAPlayer.on('play', function () {
    AddBtnSpin();
  });
  Win.GlobalAPlayer.on('pause', function () {
    AddBtnSpin();
  });
};

function AddBtnSpin() {
  const Win: any = window;
  if (Win.GlobalAPlayer && Win.GlobalAPlayer.mode) {
    if (Win.GlobalAPlayer.paused) {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'false');
    } else {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'true');
    }
  }
}

onMounted(() => {
  const router = useRouter();

  GlobalMusicList = [{
    "name": "蚂蚁筑起高塔",
    "artist": "Shuyan Yang / 田冰冰",
    "url": "https://m801.music.126.net/20240302171548/dca77d6c04979e19f1211caa9ff4b908/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/22530109234/29ea/49b4/3df9/58533863e72b4465a97c87748d8f45db.mp3",
    "cover": "https://p1.music.126.net/ET6Yq23wH8SjyfcScMQtPw==/109951169367468366.jpg",
    "lrc": "https://music.mwdocs.info/api?server=netease&type=lrc&id=2002336023"
  }];

  import('aplayer').then((res) => {
    nextTick(() => {
      APlayer = res.default;
      InsertMenu();
      NewPlayer();
      // 在这里插入全局事件监听
      window.document.body.onclick = () => {
        CloseStatus();
      };
    });

    router.beforeEach(() => {
      setTimeout(() => {
        InsertMenu();
        NewPlayer();
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="MyMusic">
      <div class="MyMusic_Play" :class="{ hide: !IsShow }">
        <div class="close" @click="CloseStatus"><span class="iconfont icon-return"></span></div>
		<div id="GlobalAPlayer"></div>
		<h3>测试版</h3>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.MyMusic {
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 12;
  cursor: pointer;
  user-select: none;
}

.MyMusic_Play {
  background-color: #fff;
  user-select: none;
  position: fixed;
  width: 280px;
  height: 392px;
  top: 50%;
  right: 50%;
  margin-right: -140px;
  margin-top: -217px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  transition: 0.3s;
  transform: scale(1);
  opacity: 1;
  &.hide {
    top: 6%;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .aplayer {
    margin: 0;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}

#MyMusic_Menu {
  top: 1px;
  user-select: none;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-color);
  height: 1.6rem;
  width: 1.6rem;
  .btnImg {
    background-image: url('https://img.mwdocs.info/20240302/11111.45heljbvb3.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
