<template>

    <NavBar />
    <div class="carousel-container">
        <div id="carouselExampleIndicators" class="carousel slide custom-carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/images.jpg" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="/1280.jpeg" class="d-block w-100" alt="Slide 2">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div class="spongebob-container">
        <div class="spongebob-item" v-for="(item, index) in spongebobNews" :key="index">
            <img :src="item.image" :alt="item.title" class="spongebob-image" />
            <div class="spongebob-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.date }}</p>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import NavBar from './NavBar.vue';

import Footer from './footer.vue';
export default {
    name: 'indexPage',
    components: {
        NavBar,
        Footer
    }, data() {
        return {
            spongebobNews: [
                { image: './1280.jpeg', title: '海绵宝宝的冒险', date: '2024-08-14', description: '海绵宝宝說你真夠朋友' },
                { image: './images.jpg', title: '派大星的新计划', date: '2024-08-14', description: '派大星决定愛你' },
                { image: './1280.jpeg', title: '海绵宝宝的冒险', date: '2024-08-14', description: '海绵宝宝說你真夠朋友' },
                { image: './images.jpg', title: '派大星的新计划', date: '2024-08-14', description: '派大星决定愛你' },
                { image: './1280.jpeg', title: '海绵宝宝的冒险', date: '2024-08-14', description: '海绵宝宝說你真夠朋友' },
                { image: './images.jpg', title: '派大星的新计划', date: '2024-08-14', description: '派大星决定愛你' },
            ]
        };
    }
}
</script>
<style scoped>
.carousel-container {
    max-width: 1920px;
    margin: 0 auto;
    /* 居中对齐 */
    overflow: hidden;
    /* 避免溢出 */
}

.custom-carousel {
    max-height: 762px;
    /* 限制最大高度 */
}

.custom-carousel .carousel-inner img {
    width: 100%;
    height: 500px;
    /* 固定高度 */
}

.spongebob-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    background-color: #2d2d2d;
    color: #f0d884;
}

.spongebob-item {
    display: flex;
    margin-bottom: 20px;
    width: 48%;
}

.spongebob-image {
    width: 120px;
    height: 90px;
    margin-right: 20px;
}

.spongebob-content {
    flex: 1;
}

h4 {
    margin: 0;
    font-size: 18px;
}

p {
    margin: 5px 0;
}

/* 媒体查询用于在手机设备上调整布局 */
@media (max-width: 600px) {
    .spongebob-item {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .spongebob-image {
        margin-right: 0;
        margin-bottom: 10px;
        width: 100%;
        /* 使图片在小屏幕上更大 */
        height: auto;
    }

    .spongebob-content {
        text-align: center;
    }
}
</style>
