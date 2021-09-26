import { useEffect } from 'react';

export const useDisableBodyScroll = (param: boolean) => {
	useEffect(() => {
		if (param) {
			document.body.style.overflow = 'hidden';
			console.log('locked');
		} else {
			document.body.style.overflowY = 'unset';
			console.log('unlocked');
		}
	}, [param]);
};
