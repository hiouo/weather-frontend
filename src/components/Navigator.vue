<template>
  <div class="navigator">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">天氣預報</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">台灣各地天氣 <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/future">未來天氣</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
  <!-- <div v-if="isMenuOpen" class="menu__extend use-in-mobile-760">
    <div
      v-if="!IS_PRD"
      class="menu__item"
      :class="{ active: currenPage === PAGE.member }"
      @click="goto(PAGE.member)"
    >
      會員
    </div>
    <div
      class="menu__item"
      :class="{ active: currenPage === PAGE.service }"
      @click="goto(PAGE.service)"
    >
      服務項目
    </div>
    <div
      class="menu__item"
      :class="{
        active:
          currenPage === PAGE.performance ||
          currenPage === PAGE.articleList ||
          currenPage === PAGE.article,
      }"
      @click="goto(PAGE.performance)"
    >
      清潔實績
    </div>
    <div
      class="menu__item"
      :class="{ active: currenPage === PAGE.notice }"
      @click="goto(PAGE.notice)"
    >
      常見問題
    </div>
  </div> -->
</template>

<!-- <script>
const PAGE = {
  index: 'Index',
  service: 'Service',
  notice: 'Notice',
  member: 'Member',
  login: 'Login',
  performance: 'Performance',
  articleList: 'ArticleList',
  article: 'Article',
}

const IS_PRD = import.meta.env.VITE_ENV_TYPE === 'prd'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import emitter from '../helpers/emitter'
import ImageLogo from '../assets/image/image/image-logo.png'
import IconMenu from '../assets/image/icon/icon-menu.svg'
import IconMenuCross from '../assets/image/icon/icon-menu-cross.svg'

export default {
  name: 'NavigatorTop',
  setup() {
    const router = useRouter()
    const route = useRoute()

    const isMenuOpen = ref(false)
    const handleClick = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const currenPage = computed(() => {
      return route.name
    })

    const goto = (page) => {
      isMenuOpen.value = false

      if (page === PAGE.member) {
        // 加入登出頁
        const token = JSON.parse(localStorage.getItem('memberToken'))
        if (!token) {
          emitter.emit('callLogin', true)
          return
        }
      }

      if (!import.meta.env.SSR) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }

      router.push({ name: page })
    }

    return {
      PAGE,
      IS_PRD,
      isMenuOpen,
      currenPage,
      handleClick,
      goto,
      ImageLogo,
      IconMenu,
      IconMenuCross,
    }
  },
}
</script> -->

<style lang="scss" scoped>
// .navigator {
//   width: 100vw;
//   padding: 5px 90px 5px 30px;
//   position: fixed;
//   z-index: 99;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: var(--beige);
//   box-shadow: 0px 0px 8px 0px #888888;
//   top: 0;

//   .logo__block {
//     cursor: pointer;
//   }
//   .menu__block {
//     display: flex;
//     justify-content: flex-start;
//   }
//   .menu__block-mobile {
//     display: none;
//   }

//   .menu__item {
//     color: var(--brown);
//     font-size: var(--font-l);
//     font-weight: 600;
//     cursor: pointer;
//   }
//   .menu__item ~ .menu__item {
//     margin-left: 20px;
//   }
// }

// @media (max-width: 530px) {
//   .navigator {
//     .logo__block {
//       width: 180px;
//       img {
//         width: 100%;
//       }
//     }
//   }
// }

// @media (max-width: 760px) {
//   .navigator {
//     .menu__block {
//       display: none !important;
//     }
//     .menu__block-mobile {
//       display: block !important;
//     }
//   }
//   .menu__extend {
//     width: 100%;
//     position: fixed;
//     top: 74px;
//     left: 0;
//     z-index: 40;
//     box-shadow: 0px 0px 8px 0px #888888;

//     .menu__item {
//       height: 60px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: var(--height-light);
//       font-size: var(--font-m);
//       background-color: var(--second);

//       &.active {
//         color: var(--brown);
//         background-color: var(--height-light);
//       }
//     }
//     .menu__item ~ .menu__item {
//       border-top: 1px solid var(--beige);
//     }
//   }
// }

// @media (max-width: 460px) {
//   .navigator {
//     width: calc(100vw);
//     padding: 10px 20px 10px 20px;

//     .logo__block {
//       width: 100px;
//       img {
//         width: 100%;
//       }
//     }
//     .menu__block-mobile {
//       img {
//         width: 25px;
//       }
//     }
//   }
//   .menu__extend {
//     top: 46px;
//   }
// }
.navbar {
  background: linear-gradient(145deg, #1b263b, #27496d, #1b263b, #3a506b, #5bc0be); /* 更豐富的漸變背景 */
}

.navbar-brand, .nav-link {
  color: #e0e0e0 !important; /* 淡色文字 */
}

.nav-link.active {
  font-weight: bold;
  color: #ffffff !important; /* 白色文字 */
}
</style>
