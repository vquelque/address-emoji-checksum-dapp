<script setup lang="ts">
const snapId = 'npm:emoji-checksum-snap'
const version = '1.0.2'

/**
 * Function to check if the wallet provider is MetaMask
 * @returns {boolean} True if MetaMask is the provider, false otherwise
 */
const isMetaMask = () => {
  return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask === true
}

/**
 * Function to install the MetaMask Snap
 */
const installSnap = async () => {
  // Check if the wallet provider is MetaMask
  if (!isMetaMask()) {
    alert(
      'MetaMask is not installed or not the active provider. Please install MetaMask and try again.'
    )
    return
  }

  try {
    // Request the Snap installation
    await window.ethereum.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: { version }
      }
    })

    alert('Snap successfully installed!')
  } catch (error) {
    alert(`Failed to install Snap: ${error.message}`)
  }
}
</script>

<template>
  <button
    @click="installSnap"
    class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
  >
    Install Snap
  </button>
</template>

<style scoped>
button {
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  opacity: 0.9;
}
</style>
