import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useEffect } from 'react';
import Background from '../components/three-scene/Background';

const Home: NextPage = () => {
	useEffect(() => {
		if (window.WebGL2RenderingContext || window.WebGLRenderingContext) {
			console.log('WebGL rendering correctly');
		} else {
			throw Error('WebGL not rendering correctly');
		}
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>Portals.art</title>
				<meta name="description" content="Enter the Portal" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.canvasContainer}>
				<Background />
			</div>
			<main></main>

			<footer></footer>
		</div>
	);
};

export default Home;
