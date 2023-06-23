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
                <input type="range" v-model="rangeValue" min="0" max="50"/>
                <div class="numbers">
                    <span>0</span>
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
                <select name="age">
                    <option>Select Age</option>
                    <option>0-3 months</option>
                    <option>3-6 months</option>
                    <option>6-9 months</option>
                </select>
            </div>
            <div class="input-fields">
                <label for="weight">Average Weight</label>
                <select name="weight">
                    <option>Select Weight</option>
                    <option>0-60 kgs</option>
                    <option>60-120 kgs</option>
                    <option>120-180 kgs</option>
                </select>
            </div>
            <div class="input-fields">
                <label for="price">Price</label>
                <select name="price">
                    <option>Select Price</option>
                    <option>30k-60k</option>
                    <option>60k-90k</option>
                    <option>90k-120k</option>
                </select>
            </div>
    
            <button class="button" type="submit">Submit Request</button>
        </form>
    </div>

</template>

<script>
export default {
  data() {
    return {
      rangeValue: 50 // Initial value of the range input
    };
  },
  computed: {
    computedNumber() {
      return this.rangeValue;
    }
  }
};


</script>

<style scoped lang="scss">
@use '~/assets/scss/pigdetail.scss'
</style>