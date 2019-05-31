<template>
  <div>
    <h2>Orchid</h2>
    <h5>A Vue.js and Firebase Powered Chat App</h5>
    <div>
      <div>
        <p v-if="messages.length == 0">[No messages yet!]</p>
        <div v-chat-scroll="{ always: false, smooth: true }">
          <div v-for="message in messages" :key="message.id">
            <span>[{{ message.name }}]:</span>
            <span>{{ message.message }}</span>
            <span>{{ message.timestamp }}</span>
          </div>
        </div>
      </div>
      <div>
        <CreateMessage :name="name"/>
      </div>
    </div>
  </div>
</template>