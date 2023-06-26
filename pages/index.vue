<template>
    <div class="main">

        <div class="barner" >
            <img src="/Kenyancheesesausages.jpg"/>
        </div>

        <div class="logo-form">

            <div class="nairobi-logo">
                <img src="/nairobilogo.webp"/>
            </div>
            
            <form @submit="submitForm" class="login-form">
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
                    <div v-if="showNotification" :class="`notification-${notificationType}`">{{ notificationMessage }}</div>
                    <!-- <NuxtLink to="/dashboard"><Icon class="icon" name="mdi:arrow-left-thin" color="black"/></NuxtLink> -->
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    import notificationMixin from '@/mixins/notificationMixin'

    export default{
        mixins: [notificationMixin],
        
        methods: {
            submitForm(e){
                e.preventDefault()
                const email = e.target.email.value
                const password = e.target.password.value

                if (email && password) {
                    const formattedName = email.split('@')[0]
                    this.showSuccessNotification(`Welcome ${formattedName}`)
                    setTimeout(()=>{
                        this.$router.push('/dashboard')
                    }, 2000)
                } else {
                    this.showErrorNotification('Enter your Email and Pawword')
                }

            }
        }
    }



</script>

<style scoped lang="scss">
@use '~/assets/scss/login.scss';
</style>