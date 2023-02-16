<script lang="ts">
    import { fade } from 'svelte/transition';

    export let number: number;
    export let label: string | undefined;
    export let autohide: boolean = true;
</script>

{#if number > 0 || !autohide}
<div class="border-primary-700 variant-filled-secondary chip">
    <div class="text-4xl">{number.toLocaleString()}</div>
    <div class="text-xl">{label}</div>
</div>
{/if}