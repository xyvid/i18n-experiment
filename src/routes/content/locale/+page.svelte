<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData

	$: ({ locales } = data)
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="card">
        <form action="?/createEvent" method="post">
            <label for="title">
                <span>Locale Title</span>
                <input type="text" id="title" name="title" />
            </label>
            <label for="native_title">
                <span>Native Locale Title</span>
                <input type="text" id="native_title" name="native_title" />
            </label>
            <label for="code">
                <span>Language Code</span>
                <input type="text" id="code" name="code" />
            </label>
            <button class="btn btn-lg bg-primary-900">Create</button>
        </form>
    </div>

    <div class="bg-surface-400">
        <table>
            {#each locales as locale}
                <tr>
                    <td>{locale.title} ({locale.native_title})</td>
                </tr>
            {/each}
        </table>
    </div>
</div>
