<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="name">Guest Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email Address:</label>
    <input type="text" id="email" v-model="email" required/>

    <label for="chackedIn">Checked In?:</label>
    <input type="radio" id="checked-in" v-model="checkedIn" required/>

    <input type="submit" value="Save" id="save"/>

  </form>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'


export default {
  name: 'booking-form',
  data(){
    return{
      name: "",
      email: "",
      checkedIn: null
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        chackedIn: this.checkedIn
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
