<script lang="ts">
	import * as API from '@/ts/be/adapter';
	import { Block, BlockTitle, Button, Navbar, Page } from 'framework7-svelte';

	const APIInstance = new API.New(import.meta.env.VITE_BE_BASE, import.meta.env.VITE_BE_VERSION);
	let pingResponse: API.HealthCheckResponse | null = $state(null);
</script>

<Page>
	<!-- Top Navbar -->
	<Navbar title="Healthcheck Endpoint" backLink="Back" />

	<!-- Page content -->
	<BlockTitle>About the functionality</BlockTitle>
	<Block>
		<p>
			You can ping the API by clicking the button below. The API will respond with a simple JSON
			object indicating the status of the API.
		</p>
	</Block>

	<BlockTitle>Demo</BlockTitle>
	<Block>
		<Button
			fill
			on:click={async () => {
				const res = await APIInstance.healthcheckPing();
				console.log(res);
				if (res) {
					// alert(`Response from API: ${JSON.stringify(res)}`);
					pingResponse = res;
				} else {
					// alert('No response from API');
				}
			}}
		>
			Ping API
		</Button>
	</Block>

	{#if pingResponse}
		<BlockTitle>API Response</BlockTitle>
		<Block>
			<pre>{JSON.stringify(pingResponse, null, 2)}</pre>
		</Block>
	{/if}
</Page>
