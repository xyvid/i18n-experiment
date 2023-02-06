<script lang="ts">
	
import type { PageData } from "./$types";

	export let data: PageData

	$: ({ locale } = data)    
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
    <div class="text-xl text-primary-900">
        <h1>{locale?.title}</h1>
    </div>
    <div class="card bg-secondary-600 mt-12">
        <h2>Create new text content</h2>
        <div>
            <form action="?/createContent" method="post">
                <input type="hidden" name="locale" value={locale?.id}>
                <div>
                    <label for="slug">
                        <span>Slug (short code)</span>
                        <input type="text" name="slug" id="slug" />
                    </label>
                </div>
                <div>
                    <label for="content">
                        <span>Content</span>
                        <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    </label>
                </div>
                <div class="card text-right">
                    <button class="btn btn-primary">Save</button>
                </div>
            </form>                
        </div>
    </div>
    <div class="bg-surface-600 mt-24">
        <h2>Existing Content</h2>
        <div class="table-container">
            <table class="table table-compact">
                <thead>
                    <tr>
                        <td></td>
                        <td>Slug</td>
                        <td>Content</td>
                    </tr>
                </thead>
                <tbody>
                {#if locale?.LocalText}
                {#each locale.LocalText as item}
                    <tr class="space-x-12">
                        <td>
                            <a href="/content/edit/{item.id}">
                                <i class="fa fa-pencil"></i>
                            </a>                            
                        </td>
                        <td>{item.slug}</td>
                        <td>{item.content}</td>
                    </tr>
                {/each}
                {/if}
            </tbody>
            </table>
        </div>
    </div>
</div>
