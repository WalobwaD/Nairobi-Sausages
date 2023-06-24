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
export default {
  data() {
    return {
      rangeValue: 1,
      selectedAge: '',
      selectedWeight: '',
      selectedPrice: '',
      ageOptions: [
        { label: 'Select Age', value: '' },
        { label: '0-3 months', value: '0-3' },
        { label: '3-6 months', value: '3-6' },
        { label: '6-9 months', value: '6-9' }
      ],
      weightOptions: [
        { label: 'Select Weight', value: '' },
        { label: '0-60 kgs', value: '0-60' },
        { label: '60-120 kgs', value: '60-120' },
        { label: '120-180 kgs', value: '120-180' }
      ],
      priceOptions: 0.00
    };
  },
  computed: {
    computedNumber() {
      return this.rangeValue;
    },

    computedPrices() {
      const ageValue = this.selectedAge;
      const weightValue = this.selectedWeight;
        if (ageValue === '0-3' && weightValue === '0-60') {
            return (10000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '3-6' && weightValue === '60-120') {
            return (20000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '6-9' && weightValue === '120-180') {
            return (30000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '0-3' && weightValue === '60-120') {
            return (20000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '3-6' && weightValue === '120-180') {
            return (25000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '0-3' && weightValue === '120-180') {
            return (25000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '3-6' && weightValue === '0-60') {
            return (15000 * this.computedNumber).toFixed(2)
        } else if (ageValue === '6-9' && weightValue === '0-60') {
            return (20000 * this.computedNumber).toFixed(2)
        } else if(ageValue === '6-9' && weightValue === '60-120') {
            return (30000 * this.computedNumber).toFixed(2)
        }
        return this.priceOptions
  }
},
  watch: {
    selectedAge() {
      // Reset the selected price when the age changes
      this.selectedPrice = '';
    },
    selectedWeight() {
      // Reset the selected price when the weight changes
      this.selectedPrice = '';
    }
  }
};


</script>

<style scoped lang="scss">
@use '~/assets/scss/pigdetail.scss'
</style>