<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      :permanent="!$vuetify.breakpoint.xsOnly"
    >
      <v-img class="ma-4 mr-8" src="/logo_xl.png"></v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          active-class="drawer-active"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(item.title)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-bind="attrs" v-on="on" exact>
            <v-list-item-action>
              <v-icon>mdi-translate</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="currentTranslation()" />
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list>
          <v-list-item
            v-for="item in $i18n.locales"
            :key="item.code"
            :value="item.code"
            @click="$i18n.setLocale(item.code)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn href="https://discord.gg/azuYQHYmTP" target="_blank" fab color="transparent" elevation="0">
        <v-icon> mdi-discord </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "navbar.home",
          to: "/",
        },
        {
          icon: "mdi-information",
          title: "navbar.info",
          to: "/info",
        },
        {
          icon: "mdi-account-plus",
          title: "navbar.register",
          to: "/register",
        },
        {
          icon: "mdi-cube",
          title: "navbar.submit",
          to: "/submit-results",
        },
        {
          icon: "mdi-format-list-bulleted-triangle",
          title: "navbar.results",
          to: "/results",
        },
        {
          icon: "mdi-twitch",
          title: "navbar.live",
          to: "/live",
        },
        {
          icon: "mdi-frequently-asked-questions",
          title: "navbar.faq",
          to: "/faq",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Italian Open Online",
      currentTranslation: () =>{
        for(var item of this.$i18n.locales)
          if(item.code === this.$i18n.locale){
            return item.name
          }
      }
    };
  }
};
</script>

<style>
.drawer-active {
  background: #00aa82;
}
</style>