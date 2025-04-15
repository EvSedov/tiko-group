<script setup lang="ts">
const { title } = defineProps({ title: { type: String, default: '' } })
</script>

<template>
  <li class="font_8" style="font-size: 15px; line-height: 1.2em">
    <span
      class="color_15"
      style="
        font-family:
          open sans,
          sans-serif;
        font-size: 16px;
      "
    >
      ● {{ title }}
    </span>
    <p class="font_8 color_15" style="font-size: 14px; line-height: 1.2em">
      <span>​</span>
    </p>
  </li>
</template>
