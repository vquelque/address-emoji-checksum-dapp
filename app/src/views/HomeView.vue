<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'
import { generateEmojiChecksum, validateAddress } from 'address-emoji-checksum'
import InstallSnapButton from '@/components/InstallSnapButton.vue'
import Footer from '@/components/Footer.vue'

type Network = 'ETH' | 'BTC' | 'SOL'

// Reactive variables
const address = ref('')
const emojiiRepresentation = ref('')
const error = ref('')
const selectedNetwork = ref<Network>('ETH') // Default network
const validateChecksum = ref(true) // Checkbox state (default selected)
const theme = ref('light') // Light/Dark theme toggle

// Network options
const networkOptions = ['ETH', 'BTC', 'SOL'] // Supported networks

const detectSystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = prefersDark ? 'dark' : 'light'
  document.documentElement.className = theme.value
}

/**
 * Validate the address based on the selected network.
 * @returns Whether the address is valid.
 */
const validateAndComputeChecksum = async (): Promise<void> => {
  try {
    error.value = ''

    // Validate address
    const isValid = validateAddress(
      address.value,
      selectedNetwork.value,
      selectedNetwork.value === 'ETH' ? validateChecksum.value : undefined
    )

    if (!isValid) {
      error.value = `Invalid ${selectedNetwork.value} address 😢`
      emojiiRepresentation.value = ''
      return
    }

    // Generate emoji checksum
    emojiiRepresentation.value = await generateEmojiChecksum(
      address.value,
      4, // Length of emoji checksum
      selectedNetwork.value,
      validateChecksum.value,
      false // Do not skip validation
    )
  } catch (e: any) {
    error.value = e.message || 'An unexpected error occurred 😢'
    emojiiRepresentation.value = ''
  }
}

// Watch for address input and network changes
watchEffect(async () => {
  if (address.value) {
    await validateAndComputeChecksum()
  } else {
    emojiiRepresentation.value = ''
    error.value = ''
  }
})

// Theme Toggler
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.className = theme.value
}

// Set system theme on mount
onMounted(() => {
  detectSystemTheme()
})
</script>

<template>
  <div>
    <main
      class="min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
    >
      <header class="absolute top-4 right-4 flex items-center space-x-4">
        <InstallSnapButton />
        <button
          class="px-4 py-2 rounded text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 shadow-md"
          @click="toggleTheme"
        >
          Toggle {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
        </button>
      </header>
      <div class="max-w-xl w-full px-4">
        <p class="text-4xl font-bold mb-6 text-center">Address Emoji Checksum 😜</p>
        <div class="flex items-center mb-4">
          <!-- Network Selector -->
          <select
            v-model="selectedNetwork"
            class="border px-2 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="network in networkOptions" :key="network" :value="network">
              {{ network }}
            </option>
          </select>
          <!-- Address Input -->
          <input
            class="w-full px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter address"
            v-model="address"
          />
        </div>
        <!-- Validation Toggle -->
        <div v-if="selectedNetwork === 'ETH'" class="flex items-center mb-4">
          <input type="checkbox" id="validateChecksum" v-model="validateChecksum" class="mr-2" />
          <label for="validateChecksum" class="text-lg">Validate checksum (ETH only)</label>
        </div>
        <!-- Error or Emoji Output -->
        <div class="text-center">
          <p v-if="error" class="text-red-500 text-2xl">{{ error }}</p>
          <p v-else>
            <span class="text-6xl">{{ emojiiRepresentation }}</span>
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
/* Light Theme */
:root {
  --background: #ffffff;
  --text: #000000;
  --input-bg: #f1f1f1;
  --button-bg: #007bff;
  --button-text: #ffffff;
}

/* Dark Theme */
:root.dark {
  --background: #121212;
  --text: #ffffff;
  --input-bg: #1f1f1f;
  --button-bg: #1f78d1;
  --button-text: #ffffff;
}

body {
  background-color: var(--background);
  color: var(--text);
}

select {
  background-color: var(--input-bg);
  color: var(--text);
}

input {
  background-color: var(--input-bg);
  color: var(--text);
}

button {
  background-color: var(--button-bg);
  color: var(--button-text);
}

button:hover {
  opacity: 0.9;
}
</style>
