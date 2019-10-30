<template>
<section>
  <booking-form />
  <bookings-grid />
</section>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue'
import BookingsGrid from '@/components/BookingsGrid.vue'

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'bookings-grid': BookingsGrid

  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
background-color: #e2dee8;
width: 75%;
  color: #000000;
  margin: auto;
}

</style>
