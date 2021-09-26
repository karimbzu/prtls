import styles from './testComponent.module.scss';
export default function TestComponent() {
	return (
		<div className={styles.card}>
			<div className={styles.text}>Hello World</div>
		</div>
	);
}
