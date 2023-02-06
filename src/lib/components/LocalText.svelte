<script lang="ts">    
    import { getLocalText, getDefaultText, activeLocale } from "$lib/data/localize";
    import { locale } from "$lib/data/appStore";

    export let slug: string;

    let content = getLocalText(slug);
    let direction = $activeLocale.dir;

    $: if (!content) {
        console.error("Missing localized text content!", $locale, slug);
        console.log('Switching to default (en-us) text content.')
        content = getDefaultText(slug)
        direction = "ltr"; // reset text direction to LTR 
    }
</script>

{#if content}
<span dir="{direction}">
    {content}
</span>
{/if}