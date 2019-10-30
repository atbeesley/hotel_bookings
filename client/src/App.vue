<template>
<section>
  <booking-form />
  <bookings-grid
</section>
</template>

<script>
import BookingForm from './components/BookingForm.vue'
import BookingsGrid from './components/BookingsGrid.vue'

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'bookings-grid': BookingsGrid

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
