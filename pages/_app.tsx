import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const useRouteChangeHandler = (): void => {
  const router = useRouter();
  const onRouteChangeComplete = useCallback((url: string) => {
    console.log('route change', url);
  }, []);
  useEffect(() => {
    console.log('route change handler enabled');
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () => {
      console.log('route change handler disabled');
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events, onRouteChangeComplete]);
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useRouteChangeHandler();
  return <Component {...pageProps} />
}

export default MyApp
