<script lang="ts">	
    import type { PageData } from "./$types";
    
    export let data: PageData
    
    $: ({ content } = data)        
</script>
    
    <div class="container h-full mx-auto flex flex-col justify-center items-center">        
        <div class="card bg-secondary-600 mt-12">
            <h2>Update localized content</h2>
            <div>
                <form action="?/editContent" method="post">
                    <input type="hidden" name="id" value={content?.id}>
                    <div>
                        <label for="slug">
                            <span>Slug (short code)</span>
                            <input type="text" name="slug" id="slug" value="{content?.slug}" />
                        </label>
                    </div>
                    <div>
                        <label for="content">
                            <span>Content</span>
                            <textarea name="content" id="content" cols="30" rows="10">{content?.content}</textarea>
                        </label>
                    </div>
                    <div class="card text-right">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </form>                
            </div>
        </div>        
    </div>
    