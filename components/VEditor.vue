<script lang="ts" setup>
type Props = {
  label: string;
};
const { label } = defineProps<Props>();
</script>

<template>
  <ClientOnly>
    <v-label>{{ label }}</v-label>
    <QuillEditor theme="snow" />
      <template #fallback>
        <p>Loading ...</p>
      </template>
  </ClientOnly>
</template>