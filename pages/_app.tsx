import 'bulma';
import { AppProps } from 'next/app';

export default function MainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}