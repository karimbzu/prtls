import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/images/main-logo.png';
import MobileLogo from '../../public/images/mobile-logo.png';
import { isMobile } from 'react-device-detect';

import styles from './navbar.module.scss';
export default function Navbar() {
	console.log(isMobile);
	const [mobile, setMobile] = useState<Boolean | undefined>(undefined);
	useEffect(() => {
		setMobile(isMobile);
	}, []);
	return (
		<div className={styles.navContainer}>
			<div className={styles.logoContainer}>
				{mobile ? (
					<Image
						src={MobileLogo}
						alt="Portals.art"
						layout="intrinsic"
						priority={true}
					/>
				) : (
					<Image
						src={Logo}
						alt="Portals.art"
						layout="intrinsic"
						priority={true}
					/>
				)}
			</div>
		</div>
	);
}
