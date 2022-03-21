import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (app) => {
  const { QuillEditor } = await import("@vueup/vue-quill");
  app.vueApp.component("QuillEditor", QuillEditor);
});
