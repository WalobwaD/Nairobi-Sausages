<template>

    <div class="main">
        
        <!--Top Bar-->
        <TopBar />

        <!--Dashboard Section-->
        <div class="dashboard">
            <div class="title">
                <h1>DashBoard</h1>
                <div class="line"></div>
            </div>
            <DashBoardCards />
        </div>

        <!--LatestPosts section-->
        <div class="latest-posts">
            <div class="title">
                <h1>Latest Posts</h1>
                <div class="line"></div>
            </div>
            <LatestCards />
        </div>

        <!--CopyRight-->
        <footer class="footer">
            <p>© {{ year }} Walobwa Dan. All Rights Reserved.</p>
        </footer>
    </div>

</template>

<script setup>

//dynamic date
const date = new Date();
const year = date.getFullYear();
</script>

<style scoped lang="scss">
@use '~/assets/scss/index.scss'

</style>