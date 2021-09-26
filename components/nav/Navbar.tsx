import Image from 'next/image';
import Logo from '../../public/images/main-logo.png';
import styles from './navbar.module.scss';
export default function Navbar() {
	return (
		<div className={styles.logoContainer}>
			<Image src={Logo} alt="Portals.art" layout="intrinsic" priority={true} />
		</div>
	);
}
