const isiOS12OrNewer = () => {

	const iOS = /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream;
	const iOSVersion = iOS && parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10);

	if ( iOS && iOSVersion >= 12 ) { return true; }
	else { return false; }

}

const enhanceWithARQuickLook = () => {

	// if the host device supports AR Quick Look...
	if ( isiOS12OrNewer() ) {

		const attr = 'data-ar-fp',
			elements = document.querySelectorAll('['+attr+']');

		// if there are AR-ready links on the page...
		if ( elements.length > 0 ) {

			// convert AR-ready links
			for ( var i in elements ) {

				const instance = elements[i],
					a = document.createElement('a');
				a.setAttribute('href', instance.getAttribute(attr));
				a.setAttribute('rel', 'ar');
				instance.removeAttribute(attr);
				instance.parentNode.insertBefore(a, instance);
				a.appendChild(instance);

			}

		}

	}

};

enhanceWithARQuickLook();