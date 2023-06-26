<template>
    <div ref="container" class="nairobi-logo">
        <div class="image"><img src="/nairobilogo.webp"/></div>
        <NuxtLink to="/login"><Icon class="icon" name="mdi:account-circle-outline"/></NuxtLink>
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
        y: '-100',
        ease: "back.out(1.7)"
    })
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/topbar.scss'
</style>