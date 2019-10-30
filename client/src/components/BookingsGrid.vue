<template lang="html">
  <div class="booking-wrapper">
    <bookings-card v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'
import BookingsCard from './BookingsCard'


export default {
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  components: {
    'bookings-card': BookingsCard
  }
}
</script>

<style lang="css" scoped>

.booking-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
