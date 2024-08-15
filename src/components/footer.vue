<template>
    <footer class="footer">
        <div class="footer-content">
            <p>地址：樹德科大 | 電話：(07)615-8000 | Email: s21113107@stu.edu.tw</p>
            <p>Copyright © 21113107 All rights reserved.</p>
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
    text-align: center;
    background-color: #2d2d2d;
    color: #f0d884;
    padding: 10px 20px;
}

.footer-content {
    font-size: 14px;
    margin-bottom: 10px;
    /* 添加一些底部空间，使内容和图标分开 */
}

.footer-icons {
    display: flex;
    justify-content: center;
    /* 图标容器水平居中 */
    margin-top: 10px;
    /* 添加顶部空间，使内容和图标分开 */
}

.social-icon {
    width: 24px;
    height: 24px;
    margin: 0 10px;
    /* 图标左右间距 */
}
</style>

<script>
export default {
    name: 'Footer',
}
</script>
