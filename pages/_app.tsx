import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/images/apple-touch-icon-152x152.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
				<link
					rel="preload"
					href="/fonts/Orbitron-Medium.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Orbitron-Bold.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Roboto-Thin.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
