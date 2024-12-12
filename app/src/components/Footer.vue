<script setup lang="ts"></script>

<template>
  <footer class="footer">
    Made with ❤️ by
    <a href="https://x.com/vquelque" target="_blank" class="footer-link">Val</a>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  background-color: var(--background, #f8f9fa);
  color: var(--text, #212529);
  font-size: 0.9rem;
}

.footer-link {
  color: var(--button-bg, #007bff);
  text-decoration: none;
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
