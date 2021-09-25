import { Canvas } from '@react-three/fiber';
import Ring from './Ring';
import { Suspense } from 'react';
import { Preload, OrbitControls, Stars } from '@react-three/drei';

export default function Background() {
	return (
		<Canvas
			style={{ height: '100vh', position: 'absolute', background: 'black' }}
			camera={{ position: [40, 1, 0.1] }}
		>
			<Suspense fallback={null}>
				<Ring />
				<Stars
					radius={100} // Radius of the inner sphere (default=100)
					depth={50} // Depth of area where stars should fit (default=50)
					count={7000} // Amount of stars (default=5000)
					factor={6} // Size factor (default=4)
					saturation={0} // Saturation 0-1 (default=0)
					fade // Faded dots (default=false)
				/>
				<OrbitControls enablePan={false} />
				<Preload all />
			</Suspense>
		</Canvas>
	);
}
