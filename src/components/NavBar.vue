<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="https://www.sunyad.com.tw/" target="_blank">
        <img src="/logo01.png" alt="logo" class="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="aboutDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('aboutDropdown')"
              @mouseleave="leave('aboutDropdown')">
              {{ aboutText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/introduction.asp" target="_blank">公司簡介</a>
              </li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/operate.asp" target="_blank">經營理念</a></li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/service.asp" target="_blank">主要事業產品及服務</a>
              </li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/organization.asp" target="_blank">公司組織</a>
              </li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/team.asp" target="_blank">經營團隊</a></li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/news.asp" target="_blank">最新消息</a></li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/award.asp" target="_blank">得獎紀錄</a></li>
              <li><a class="dropdown-item" href="https://www.sunyad.com.tw/albums.asp?cid=1" target="_blank">活動花絮</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="constructionDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('constructionDropdown')"
              @mouseleave="leave('constructionDropdown')">
              {{ constructionText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="constructionDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">施工項目1</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">施工項目2</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="investorsInfoDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('investorsInfoDropdown')"
              @mouseleave="leave('investorsInfoDropdown')">
              {{ investorsInfoText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="investorsInfoDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">投資人資訊1</a></li>
              <li class="dropdown-submenu">
                <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" role="button">投資人資訊2</a>
                <!-- <span class="dropdown-item">投資人資訊2</span> -->
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" target="_blank">子選項1</a></li>
                  <li><a class="dropdown-item" href="#" target="_blank">子選項2</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="ResponsibilltyDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('ResponsibilltyDropdown')"
              @mouseleave="leave('ResponsibilltyDropdown')">
              {{ ResponsibilltyText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="ResponsibilltyDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">社會責任1</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">社會責任2</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="RelatedPartiesDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('RelatedPartiesDropdown')"
              @mouseleave="leave('RelatedPartiesDropdown')">
              {{ RelatedPartiesText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="RelatedPartiesDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">利害關係人1</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">利害關係人2</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="ContactDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('ContactDropdown')"
              @mouseleave="leave('ContactDropdown')">
              {{ ContactText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="ContactDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">聯絡1</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">聯絡2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script setup>
import { ref } from 'vue';

const aboutText = ref('關於上曜');
const constructionText = ref('建築創作');
const investorsInfoText = ref('投資人專區');
const ResponsibilltyText = ref('社會責任');
const RelatedPartiesText = ref('利害關係人專區');
const ContactText = ref('聯絡我們');

const texts = {
  aboutDropdown: { original: '關於上曜', hover: 'About' },
  constructionDropdown: { original: '建築創作', hover: 'Construction Plans' },
  investorsInfoDropdown: { original: '投資人專區', hover: 'Investor Info' },
  ResponsibilltyDropdown: { original: '社會責任', hover: 'Responsibility' },
  RelatedPartiesDropdown: { original: '利害關係人專區', hover: 'Related Parties' },
  ContactDropdown: { original: '聯絡我們', hover: 'Contact' }
};

const hover = (dropdownId) => {
  const textMap = {
    aboutDropdown: () => aboutText.value = texts.aboutDropdown.hover,
    constructionDropdown: () => constructionText.value = texts.constructionDropdown.hover,
    investorsInfoDropdown: () => investorsInfoText.value = texts.investorsInfoDropdown.hover,
    ResponsibilltyDropdown: () => ResponsibilltyText.value = texts.ResponsibilltyDropdown.hover,
    RelatedPartiesDropdown: () => RelatedPartiesText.value = texts.RelatedPartiesDropdown.hover,
    ContactDropdown: () => ContactText.value = texts.ContactDropdown.hover
  };

  textMap[dropdownId]?.();
};

const leave = (dropdownId) => {
  const textMap = {
    aboutDropdown: () => aboutText.value = texts.aboutDropdown.original,
    constructionDropdown: () => constructionText.value = texts.constructionDropdown.original,
    investorsInfoDropdown: () => investorsInfoText.value = texts.investorsInfoDropdown.original,
    ResponsibilltyDropdown: () => ResponsibilltyText.value = texts.ResponsibilltyDropdown.original,
    RelatedPartiesDropdown: () => RelatedPartiesText.value = texts.RelatedPartiesDropdown.original,
    ContactDropdown: () => ContactText.value = texts.ContactDropdown.original
  };

  textMap[dropdownId]?.();
};






</script>

<style scoped>
.navbar-nav {
  display: flex;
  justify-content: center;
  /* 确保导航栏居中 */
  width: 100%;
}

.navbar-nav .nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
}

.logo {
  width: 100px;
  /* 根据需要调整logo大小 */
  height: auto;
}

.navbar-nav li:hover>ul.dropdown-menu {
  display: block;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu>.dropdown-menu {
  top: 0%;
  left: 100%;
  margin-top: -3px;
}

.dropdown-menu>li>a:hover:after {
  transform: rotate(-90deg);
  transition: 1s;
}





@media (max-width: 768px) {
  .navbar-brand {
    margin-left: auto;
    margin-right: auto;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    text-align: center;
  }

}
</style>
