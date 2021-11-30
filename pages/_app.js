import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import install from '@layer0/prefetch/window/install';
import Sidebar from '../components/Sidebar';
import GlobalStyle from '../components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: '/graphql',
  });
  useEffect(() => install(), []);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Sidebar />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
