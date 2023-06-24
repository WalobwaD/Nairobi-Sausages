<template>
    <div class="main">

        <div ref="container" class="barner" >
            <img src="/Kenyancheesesausages.jpg"/>
        </div>

        <div class="logo-form">

            <div class="nairobi-logo">
                <img src="/nairobilogo.webp"/>
            </div>
            
            <form class="login-form">
                <div class="labels">
                    <label for="email">Enter Your Email Address</label>
                    <input type="text" id="email" name="email" placeholder="Email" />
                </div>
    
                <div class="labels">
                    <label for="password">Enter You Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>
    
    
                <button class="login-button">Login</button>
    
                <div class="text">
                    <p>Don't Have an Account? <a class="register">Register</a></p>
                    <p class="forgot">Forgot Password</p>
                    <NuxtLink to="/"><Icon class="icon" name="mdi:arrow-left-thin" color="black"/></NuxtLink>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import gsap from "gsap"
import {ref, onMounted} from "vue"

const container = ref(null)
onMounted(()=>{
    gsap.from(container.value, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)"
    })
})
</script>
<style scoped lang="scss">
@use '~/assets/scss/login.scss';
</style>