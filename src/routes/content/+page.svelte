<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData

	$: ({ locales } = data)
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
<h1>Manage Localized Content</h1>

<a href="/content/locale" class="btn variant-filled-primary">
    <i class="fa fa-plus"></i>
    New Locale
</a>

<h2>Available Locales</h2>
{#each locales as l}
<div>
    <a href="/content/{l.code}">{l.title}</a>
</div>
{/each}
</div>