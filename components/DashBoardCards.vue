<template>
    <div v-motion-slide-right class="dash-cards">
        <div class="card">
            <h1>Farm</h1>
            <div class="content"><span>2</span>| <p>KIAMBU COUNTY</p></div>
            <button class="order">Order Feeds</button>
        </div>
        <div class="card">
            <h1>Pigs</h1>
            <div class="content"><span>36</span>| <p>LARGE WHITE</p></div>
            <button class="sell">
                <NuxtLink to="/pigdetail">Sell a Batch</NuxtLink>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use '~/assets/scss/dashboardcards.scss'

</style>