<template lang="html">
  <div class="bookings-card">
    <h3>Guest Name:{{ booking.name }}</h3>
    <p>Guest Email:{{ booking.email }}</p>
    <p>Checked In?:{{ booking.checkedIn }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking"></button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'


export default {
  name: 'booking-card',
  props: ['booking'],
  
  methods: {
    deleteBooking(){
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
