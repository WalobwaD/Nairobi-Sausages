<template>
    <div class="dash-cards">
        <div class="card">
            <h1>Farm</h1>
            <div class="content"><span>2</span>| <p>KIAMBU COUNTY</p></div>
            <button class="order">Order Feeds</button>
        </div>
        <div class="card">
            <h1>Pigs</h1>
            <div class="content"><span>36</span>| <p>LARGE WHITE</p></div>
            <NuxtLink class="sell" to="/pigdetail">
                Sell a batch
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use '~/assets/scss/dashboardcards.scss'

</style>