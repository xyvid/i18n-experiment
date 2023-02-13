<script lang="ts">
    import { locale, event_date } from "$lib/data/appStore";
    import LocalText from "$lib/components/LocalText.svelte";
    import { LightSwitch } from '@skeletonlabs/skeleton';

    import type { PageData } from "./$types";

	export let data: PageData

	$: ({ locales } = data)
</script>

<div class="container h-full mx-auto flex justify-center items-center space-x-12 space-y-12">
    <h1>
        <LocalText slug="settings" />
        <a href="/" class="btn variant-filled-primary"><i class="fa fa-check"></i></a>
    </h1>    
    <div class="card p-8 space-y-3">
        <div>
            Dark mode
            <LightSwitch />
        </div>
        <label for="lang">
            <span>Language</span>
            <select name="lang" id="lang" bind:value={$locale}>
                {#each locales as l}
                <option value="{l.code}">{l.title} / {l.native_title}</option>
                {/each}
            </select>
        </label>
        <label for="event_time">
            <span>Demo Event Date/time</span>
            <!-- native date/time elements with correct formatting on value, all for free is wild man -->
            <input type="datetime-local" bind:value={$event_date} id="event_time" />
        </label>
    </div>
</div>