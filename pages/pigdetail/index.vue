<template>
    <div class="main">

        <TopBar />

        <form class="form">
            <NuxtLink to="/"><Icon class="icon" name="mdi:arrow-left-thin" color="black"/></NuxtLink>

    
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
                <select name="breed">
                    <option>Select Breed</option>
                    <option>Ankamali</option>
                    <option>American YorkShire</option>
                    <option>Angeln SaddleBack</option>
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
        </form>
    </div>

</template>


<script>

    import PriceCalculator from "./PriceCalculator"

    export default {
        mixins: [PriceCalculator],
    }

</script>


<style scoped lang="scss">
@use '~/assets/scss/pigdetail.scss'
</style>