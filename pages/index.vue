<template>

    <div class="main">
        
        <!--Top Bar-->
        <div class="nairobi-logo">
            <div class="image"><img src="/nairobilogo.webp"/></div>
            <NuxtLink to="/login">Login</NuxtLink>
        </div>

        <!--Dashboard Section-->
        <div class="dashboard">
            <h1>DashBoard</h1>
            <DashBoardCards />
        </div>

        <!--LatestPosts section-->
        <div class="latest-posts">
            <h1>Latest Posts</h1>
            <LatestCards />
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
@use '~/assets/scss/index.scss'

</style>