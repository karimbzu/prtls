/** @type {HTMLCanvasElement} */
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Torus, useMatcapTexture } from '@react-three/drei';
import {
	EffectComposer,
	Bloom,
	DepthOfField,
} from '@react-three/postprocessing';

export default function Ring() {
	const myMesh = useRef<THREE.Mesh>();

	useFrame(({ clock }) => {
		const a = clock.getElapsedTime();
		if (myMesh.current !== undefined) {
			myMesh.current.rotation.x = a / 2.5;
			myMesh.current.rotation.y = a / 2.5;
		}
	});

	const [matcap, url] = useMatcapTexture(21, 1024);

	return (
		<group>
			<mesh ref={myMesh}>
				<Torus args={[10, 3, 16, 100]}>
					<meshMatcapMaterial matcap={matcap} color="cyan" />
				</Torus>
			</mesh>
			<EffectComposer>
				<Bloom
					kernelSize={3}
					luminanceThreshold={0}
					luminanceSmoothing={2}
					intensity={0.6}
				/>
				<DepthOfField focusDistance={2} focalLength={0.02} bokehScale={0.5} />
			</EffectComposer>
		</group>
	);
}
