<template>
    <footer class="footer">
        <div class="footer-content">
            <p>地址：樹德科大 | 電話：(07)615-8000 | Email: <a href="s21113107@stu.edu.tw">s21113107@stu.edu.tw</a>
            </p>
            <p>Copyright © 5; 21113107 All rights reserved.</p>
        </div>
        <div class="footer-icons">
            <a href="https://www.facebook.com" target="_blank">
                <img src="/5968764.png" alt="Facebook" class="social-icon" />
            </a>
            <a href="https://line.me" target="_blank">
                <img src="/images.png" alt="LINE" class="social-icon" />
            </a>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #2d2d2d;
    color: #f0d884;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-content {
    font-size: 14px;
}

.footer-icons {
    display: flex;
    align-items: center;
}

.social-icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;
}
</style>


<script>
export default {
    name: 'Footer',
}
</script>