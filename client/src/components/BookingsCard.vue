<template lang="html">
  <div class="bookings-card">
    <h3>Guest Name: {{ booking.name }}</h3>
    <p>Guest Email: {{ booking.email }}</p>
    <p>Checked In?: {{ booking.checkedIn }}</p>
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

.bookings-card {
  background-color: salmon;
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
}

.delete-btn {
  width: 40px;
  height: 40px;
  background: url(../assets/delete-button-clipart-delete-button-clipart-html-1600.png);
  background-size: 40px;
  border: none;
  padding: 0;
  border-radius: 4px;
}
</style>
