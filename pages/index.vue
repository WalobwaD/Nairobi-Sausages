<template>
    <div class="main">
        <div class="nairobi-logo">
            <div class="image"><img src="/nairobilogo.webp"/></div>
            <NuxtLink to="/login">Login</NuxtLink>
        </div>
        <div class="dashboard">
            <h1>DashBoard</h1>
            <div class="dash-cards">
                <div class="card">
                    <h1>Farm</h1>
                    <div class="content"><span>2</span>| <p>KIAMBU COUNTY</p></div>
                    <button>ORDER FEEDS</button>
                </div>
                <div class="card">
                    <h1>Farm</h1>
                    <div class="content"><span>2</span>| <p>KIAMBU COUNTY</p></div>
                    <button>ORDER FEEDS</button>
                </div>
            </div>
        </div>
        <div class="latest-posts">
            <h1>Latest Posts</h1>
            <div>Items</div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
@use '~/assets/scss/index.scss'
</style>