<template>

    <div class="main">
        
        <!--Top Bar-->
        <div class="nairobi-logo">
            <div class="image"><img src="/nairobilogo.webp"/></div>
            <NuxtLink to="/login"><Icon class="icon" name="mdi:account-circle-outline"/></NuxtLink>
        </div>

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
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
@use '~/assets/scss/index.scss'

</style>