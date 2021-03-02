<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      :permanent="!$vuetify.breakpoint.xsOnly"
    >
      <v-img class="ma-4 mr-8" aspect-ratio="3.1531" src="/logo-xl.svg"></v-img>

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

      <v-list>
        <v-menu bottom offset-y>
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
      </v-list>
      <v-divider></v-divider>

      <v-list v-if="!$auth.loggedIn">
        <v-list-item @click="login">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('generic.login')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list v-else>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$auth.user.name" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('generic.logout')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        href="https://discord.gg/azuYQHYmTP"
        target="_blank"
        fab
        color="transparent"
        elevation="0"
      >
        <v-icon> mdi-discord </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
        <Contact />
      </v-container>
    </v-main>
    <!-- <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
          to: "/informazioni",
        },
        {
          icon: "mdi-account-plus",
          title: "navbar.register",
          to: "/registrazione",
        },
        {
          icon: "mdi-clipboard-list",
          title: "navbar.competitors",
          to: "/iscritti",
        },
        {
          icon: "mdi-clock-outline",
          title: "navbar.submit",
          to: "/partecipa",
        },
        {
          icon: "mdi-format-list-bulleted-triangle",
          title: "navbar.results",
          to: "/classifiche",
        },
        {
          icon: "mdi-twitch",
          title: "navbar.live",
          to: "/diretta-streaming",
        },
        {
          icon: "mdi-frequently-asked-questions",
          title: "navbar.faq",
          to: "/domande-frequenti",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Italian Open Online",
      currentTranslation: () => {
        for (var item of this.$i18n.locales)
          if (item.code === this.$i18n.locale) {
            return item.name;
          }
      },
    };
  },
  methods: {
    login() {
      this.$auth.loginWith("social");
    },
    logout() {
      this.$auth.logout();
    },
  },
  async mounted() {
    const workbox = await window.$workbox;
    if (workbox) {
      workbox.addEventListener("installed", (event) => {
        if (event.isUpdate) {
          window.location.reload();
        }
      });
    }
  },
};
</script>

<style>
.drawer-active {
  background: #00aa82;
}
</style>