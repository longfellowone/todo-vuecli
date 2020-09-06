import Vue from 'vue'
import VueCompositionAPI, { provide } from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/',
})

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
