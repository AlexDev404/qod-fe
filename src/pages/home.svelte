<script lang="ts">
	import {
		Block,
		BlockTitle,
		Button,
		List,
		ListItem,
		Navbar,
		NavTitle,
		NavTitleLarge,
		Page
	} from 'framework7-svelte';
</script>

<Page name="home">
	<!-- Top Navbar -->
	<Navbar sliding={false}>
		<!-- Nav Title -- When scrolling -->
		<NavTitle sliding>{import.meta.env.VITE_APP_NAME}</NavTitle>
		<!-- Large Nav Title -- When at the top -->
		<NavTitleLarge>{import.meta.env.VITE_APP_NAME}</NavTitleLarge>
	</Navbar>

	<!-- Page content -->
	<Block>
		<p>Here is your blank Framework7 app. Let's see what we have here.</p>
	</Block>

	<BlockTitle>Navigation</BlockTitle>
	<List strong inset dividersIos>
		<ListItem link="settings" title="About" />
		<ListItem link="/form/" title="Form" />
	</List>

	<BlockTitle>Modals</BlockTitle>
	<Block class="grid-gap grid grid-cols-2">
		<Button fill popupOpen="#my-popup">Popup</Button>
		<Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
	</Block>

	<BlockTitle>Panels</BlockTitle>
	<Block class="grid-gap grid grid-cols-2">
		<Button fill panelOpen="left">Left Panel</Button>
		<Button fill panelOpen="right">Right Panel</Button>
	</Block>

	<List strong inset dividersIos>
		<ListItem
			title="Dynamic (Component) Route"
			link="/dynamic-route/blog/45/post/125/?foo=bar#about"
		/>
		<ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/" />
		<ListItem title="Request Data & Load" link="/request-and-load/user/123456/" />
	</List>
</Page>
