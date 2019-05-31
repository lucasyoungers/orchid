<template>
  <div>
    <div>
      <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Please enter your name ..."
              name="name"
              v-model="name"
            >
            <p v-if="errorText">{{ errorText }}</p>
          </div>
          <button>Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.errorText = "Please enter a name!";
      }
    }
  }
};
</script>