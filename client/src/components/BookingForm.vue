<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="name">Guest Name: </label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email Address: </label>
    <input type="text" id="email" v-model="email" required/>

    <label for="chackedIn">Checked In?: </label>
    Yes<input type="radio" id="checkedIn" v-model="checkedIn" v-bind:value="true" required/>

    No<input type="radio" id="checkedIn" v-model="checkedIn" v-bind:value="false" required/>

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
        checkedIn: this.checkedIn
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
form {
  margin-top: 20px;
}
input [type=text]{
  width: 40px;
  border-radius: 2px;
  padding: 4px;
  border-style: dashed;
}


input [type=submit] {
  display: block;
  border-radius: 5px;
  background-color: dodgerblue;
  padding: 4px 10px 6px;
  margin: 1em 0;
}
</style>
