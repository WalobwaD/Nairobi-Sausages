<template>
    <div class="main">
        <div>
            <h1>Nairobi Sausages</h1>
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
                <p>Don't Have an Account? <a>Register</a></p>
                <p>Forgot Password</p>
            </div>
        </form>
    </div>
</template>

<script setup>
</script>
<style scoped lang="scss">
@use '~/assets/scss/login.scss';
</style>