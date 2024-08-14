<template>

    <NavBar/>
    <div class="carousel-container" >
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
    <indexText/>
    <Footer />
</template>
<script >
import NavBar from './NavBar.vue';
import indexText from './indexText.vue';
import Footer from './footer.vue';
export default {
    name: 'indexPage',
    components: {
        NavBar,
        indexText,
        Footer
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
</style>
