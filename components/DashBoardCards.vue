<template>
    <div  ref="container" class="dash-cards">
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
import gsap from "gsap"
import {ref, onMounted} from "vue"

const container = ref(null)
onMounted(()=>{
    gsap.from(container.value, {
        autoAlpha: 0,
        duration: 1,
        delay: 0.5,
        y: '+100',
        ease: "back.out(1.7)"
    })
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/dashboardcards.scss'

</style>