import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import VueApolloComponents from '@vue/apollo-components'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'

import './index.css';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

import App from './App.vue'
import router from './router'
import vueApolloComponents from '@vue/apollo-components';

const apolloProvider = createApolloProvider({
defaultClient: apolloClient,
})

const app = createApp({
    render: () => h(App),
})

app.use(apolloProvider)
app.use(createPinia())
app.use(router)

app.mount('#app')
