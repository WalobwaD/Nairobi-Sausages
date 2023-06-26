const PriceCalculator = {
    data() {
      return {
        rangeValue: 1,
        selectedAge: '',
        selectedWeight: '',
        selectedPrice: '',
        selectedBreed: '',

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

        breedOptions: [
          { label: 'Select Breed', value: '' },
          { label: 'Ankamali', value: 'Ankamali' },
          { label: 'American YorkShire', value: 'American YorkShire' },
          { label: 'Angeln SaddleBack', value: 'Angeln SaddleBack' }
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
        this.selectedPrice = '';
      },
      selectedWeight() {
        this.selectedPrice = '';
      },

    }
  };

export default PriceCalculator;