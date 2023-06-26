<template>
    <div class="main">

        <TopBar />

        <form @submit="submitForm" class="form">
            <NuxtLink to="/dashboard"><Icon class="icon" name="mdi:arrow-left-thin" color="black"/></NuxtLink>

    
            <div class="range">
                <div class="head">
                    <h2>Submit a batch</h2>
                    <span>{{computedNumber}}</span>
                </div>
                <input type="range" v-model="rangeValue" min="1" max="50"/>
                <div class="numbers">
                    <span>1</span>
                    <span>50</span>
                </div>
            </div>
    
            <div class="input-fields">
                <label for="breed">Breed</label>
                <select name="breed" v-model="selectedBreed">
                    <option v-for="breedOption in breedOptions" :value="breedOption.value">{{ breedOption.label }}</option>
                </select>
            </div>
            <div class="input-fields">
                <label for="age">Age</label>
                <select name="age" v-model="selectedAge">
                    <option v-for="ageOption in ageOptions" :value="ageOption.value">{{ ageOption.label }}</option>
                </select>
            </div>
            <div class="input-fields">
                <label for="weight">Average Weight</label>
                <select name="weight" v-model="selectedWeight">
                    <option v-for="weightOption in weightOptions" :value="weightOption.value">{{ weightOption.label }}</option>
                </select>
            </div>
            <div class="input-fields">
                <label for="price">Ask per Price</label>
                <input type="number" class="price" :value="computedPrices"/>
            </div>
    
            <button class="button" type="submit">Submit Request</button>
            <div v-if="showNotification" :class="`notification-${notificationType}`">{{ notificationMessage }}</div>
        </form>
    </div>

</template>


<script>

    import PriceCalculator from "@/mixins/priceCalculator"
    import notificationMixin from "@/mixins/notificationMixin"

    export default {
        mixins: [PriceCalculator, notificationMixin],

        methods: {
            submitForm(e) {
                e.preventDefault()
                console.log('Form submitted')
                if (this.selectedAge && this.selectedWeight) {
                    this.showSuccessNotification(
                        `   Request Submitted
                            Number of Pigs: ${this.rangeValue}
                            Breed: ${this.selectedBreed}
                            Age: ${this.selectedAge}
                            Weight: ${this.selectedWeight}
                            Total Price: ${this.computedPrices}

                        `
                        )
                    setTimeout(()=>{
                        this.$router.push('/dashboard')
                    }, 2000)
                } else {
                    this.showErrorNotification('Please Fill in the breed, age and weight')
                    return;
                }
            }
        }

    }


</script>


<style scoped lang="scss">
@use '~/assets/scss/pigdetail.scss'
</style>