<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <v-container>
    <h1>Edit</h1>
    <v-text-field label="Title" />
    <VEditor label="content" />
  </v-container>
</template>
