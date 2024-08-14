<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.sunyad.com.tw/" target="block">
        <img src="/logo01.png" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
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
              <li><a class="dropdown-item"
                  href="https://www.google.com/search?sca_esv=09c6452bc1fe88ee&sxsrf=ADLYWILCUirdrKHnc0_orMOFYoWfRDsmDQ:1723563540027&q=%E6%B5%B7%E7%B6%BF%E5%AF%B6%E5%AF%B6%E6%A2%97%E5%9C%96&udm=2&fbs=AEQNm0AaBOazvTRM_Uafu9eNJJzC3QMRKTS5UIeA1ZwBo3sfI5tRK2wzmp0oTr82Uvr9kDU5RO0xZEAgPH8kQ6uw4YLujuEAiXbmg8cQlkVdEzftlSVnJumesF_YaiMzeimFnuqbDbOnfirn0PJIamty4Q_DLvYS8qdzbheUpREWKy0j6swPQiguXGYLqZeZBmG6k_-bgGxd&sa=X&ved=2ahUKEwjmh7TEpvKHAxX-oa8BHeEwCPgQtKgLegQICxAB&biw=1920&bih=911&dpr=1#vhid=5wcvcI7K73moxM&vssid=mosaic"
                  target="_blank"><img src="\public\images.jpg" alt="派大星">
                </a></li>
              <li><a class="dropdown-item"
                  href="https://www.google.com/search?sca_esv=09c6452bc1fe88ee&sxsrf=ADLYWILCUirdrKHnc0_orMOFYoWfRDsmDQ:1723563540027&q=%E6%B5%B7%E7%B6%BF%E5%AF%B6%E5%AF%B6%E6%A2%97%E5%9C%96&udm=2&fbs=AEQNm0AaBOazvTRM_Uafu9eNJJzC3QMRKTS5UIeA1ZwBo3sfI5tRK2wzmp0oTr82Uvr9kDU5RO0xZEAgPH8kQ6uw4YLujuEAiXbmg8cQlkVdEzftlSVnJumesF_YaiMzeimFnuqbDbOnfirn0PJIamty4Q_DLvYS8qdzbheUpREWKy0j6swPQiguXGYLqZeZBmG6k_-bgGxd&sa=X&ved=2ahUKEwjmh7TEpvKHAxX-oa8BHeEwCPgQtKgLegQICxAB&biw=1920&bih=911&dpr=1#vhid=o_m4ASl0PokNBM&vssid=mosaic"
                  target="_blank"><img src="\public\1280.jpeg" alt="海綿寶寶" style="width: 260px;"></a></li>
              
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="investorsInfoDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('investorsInfoDropdown')"
              @mouseleave="leave('investorsInfoDropdown')">
              {{ investorsInfoText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="investorsInfoDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">Action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Another action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="ResponsibilltyDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('ResponsibilltyDropdown')"
              @mouseleave="leave('ResponsibilltyDropdown')">
              {{ ResponsibilltyText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="ResponsibilltyDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">Action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Another action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="RelatedPartiesDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('RelatedPartiesDropdown')"
              @mouseleave="leave('RelatedPartiesDropdown')">
              {{ RelatedPartiesText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="RelatedPartiesDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">Action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Another action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="ContactDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" @mouseenter="hover('ContactDropdown')"
              @mouseleave="leave('ContactDropdown')">
              {{ ContactText }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="ContactDropdown">
              <li><a class="dropdown-item" href="#" target="_blank">Action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Another action</a></li>
              <li><a class="dropdown-item" href="#" target="_blank">Something else here</a></li>
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

  textMap[dropdownId]?.(); // 使用可选链操作符，安全调用对应的函数
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

  textMap[dropdownId]?.(); // 使用可选链操作符，安全调用对应的函数
};
</script>

<style scoped>
.navbar-nav .nav-link:hover {
  background-color: #f8f9fa;
  color: #000;
}

a {
  color: #000;
}
</style>
