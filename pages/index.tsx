import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import Background from '../components/three-scene/Background';
import ComingSoon from '../components/comingSoon/ComingSoon';
import Navbar from '../components/nav/Navbar';

const Home: NextPage = () => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		if (window.WebGL2RenderingContext || window.WebGLRenderingContext) {
			console.log('WebGL rendering correctly');
		} else {
			throw Error('Please turn on WebGL for full experience');
		}
	});

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
		}, 3000);
	}, []);

	return (
		<div>
			<Head>
				<title>Portals.art</title>
				<meta name="description" content="Enter the Portal" />
			</Head>
			{mounted ? (
				<>
					<div className={styles.canvasContainer}>
						<Background />
					</div>
					<main>
						<Navbar />
						<ComingSoon />
					</main>
				</>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Home;
