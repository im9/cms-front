<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>CMS</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      expand-on-hover
      rail
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </v-main>
  </v-app>
</template>
