<template>
  <div>
    <form @submit.prevent="createMessage">
      <div>
        <input type="text" name="message" placeholder="Enter message ..." v-model="newMessage">
        <p v-if="errorText">{{ errorText }}</p>
      </div>

      <button type="submit" name="action">Submit</button>
    </form>
  </div>
</template>

<script>
import fb from "@/firebase";

export default {
  name: "CreateMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "A message must be entered!";
      }
    }
  }
};
</script>