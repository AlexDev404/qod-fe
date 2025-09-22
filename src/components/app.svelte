<script lang="ts">
	import { App, f7, f7ready, View } from 'framework7-svelte';
	import { getDevice } from 'framework7/lite/bundle';
	import { onMount } from 'svelte';

	import capacitorApp from '@/ts/capacitor-app';
	import routes from '@/ts/routes';

	const device = getDevice();
	// Framework7 Parameters
	let f7params = {
		name: import.meta.env.VITE_APP_NAME, // App name
		// theme: import.meta.env.VITE_APP_THEME, // Automatic theme detection
		// App routes
		routes: routes,

		// Input settings
		input: {
			scrollIntoViewOnFocus: device.capacitor,
			scrollIntoViewCentered: device.capacitor
		},
		// Capacitor Statusbar settings
		statusbar: {
			iosOverlaysWebView: true,
			androidOverlaysWebView: false
		}
	};
	onMount(() => {
		f7ready(() => {
			// Init capacitor APIs (see capacitor-app.js)
			if (f7.device.capacitor) {
				capacitorApp.init(f7);
			}
			// Call F7 APIs here
		});
	});
</script>

<App {...f7params} class={import.meta.env.VITE_APP_THEME}>
	<!-- Your main view, should have "view-main" class -->
	<View main class="safe-areas" url="/" />
</App>
