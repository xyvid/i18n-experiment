<script lang="ts">
// import { theme } from '$lib/data/appStore';
// import '$lib/themes/simple.css';
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
// import '@skeletonlabs/skeleton/themes/theme-modern.css';
import '@skeletonlabs/skeleton/styles/all.css';
import '../app.postcss';
import { AppShell, AppBar } from '@skeletonlabs/skeleton';
import { browser } from '$app/environment';

//# sadly, this only worked with default Skeleton themes, not custom themes. 
// $: if (browser && $theme) {
// 	document.body.setAttribute('data-theme', $theme);
// }

import { localContent, defaultContent, activeLocale, _ } from "$lib/data/localize";
import { locale } from "$lib/data/appStore";
	
import type { PageData } from "./$types";
	
export let data: PageData



//*************** Setup localized content stores *************************/
// PageData isn't always available on load, so this logic is explicitly reactive ($:)
// so that content loads whenever the server side responds

// extract localized content from server response when it becomes available
$: ({ locales, english } = data)

// assign en-us content to default store
$: if (english) { $defaultContent = english.LocalText }

// populate active content with selected locale
$: if (locales) {
	let result = locales.find((i: { code: string; }) => i.code === $locale)
	if (result) {
		$activeLocale = result;
		$localContent = result.LocalText;		
	}	
}

// update top level lang attribute when page is ready
$: if (browser && $locale) document.documentElement.setAttribute('lang', $locale)
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">Xyvid</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/content">i18n</a>				
				<a href="/settings" class="btn">
					<i class="fa fa-gear"></i>
				</a>				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
