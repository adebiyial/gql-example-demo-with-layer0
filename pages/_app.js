import Sidebar from '../components/Sidebar';
import GlobalStyle from '../components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
