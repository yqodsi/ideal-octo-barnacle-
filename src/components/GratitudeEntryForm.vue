<template>
  <!-- <form @submit.prevent="submitEntry">
    <textarea
      v-model="entryText"
      placeholder="What are you grateful for today?"
      required
      :class="{ 'border-red-500': errors.entryText }"
    ></textarea>
    <div v-if="errors.entryText" class="text-red-500">{{ errors.entryText }}</div>

    <div>
      <label for="mood">Mood:</label>
      <select id="mood" v-model="mood">
        <option value="1">😊</option>
        <option value="2">🙂</option>
        <option value="3">😐</option>
        <option value="4">🙁</option>
        <option value="5">☹️</option>
      </select>
    </div>

    <input
      type="file"
      ref="mediaInput"
      @change="handleMediaUpload"
      accept="image/*,video/*,audio/*"
    />

    <button type="submit">Share Gratitude</button>
  </form> -->
  <button @click="submitEntry">"Share Gratitude</button>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useGratitudeStore } from '../stores/gratitudeStore'

const gratitudeStore = useGratitudeStore()
const entryText = ref('eeee')
const mood = ref(3) // Default to neutral
const mediaInput = ref(null)
const mediaUrl = ref(null)

const handleMediaUpload = async (event) => {
  // ... Logic to upload file to Supabase Storage and get mediaUrl
}

const submitEntry = async () => {
  await gratitudeStore.createEntry({
    entry_text: entryText.value,
    mood: mood.value
    // media_url: mediaUrl.value // Only include if media was uploaded
  })
}
</script>
