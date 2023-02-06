import { fail } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ( { params }) => {
    try {
        let id = parseInt(params.id)
        let result = await prisma.localText.findUnique({
            where: {
            id: id,
            },
        })
      
        return {
            content: result
        } 
    } catch (e) {
      console.error(e)
    }
}


export const actions: Actions = {
    editContent: async ({ request })     => {
        const { id, slug, content } = 
            Object.fromEntries(await request.formData()) as { id: string, slug: string, content: string };

        const content_id = parseInt(id); 
      
        try {
            await prisma.localText.update({
                where: {
                    id: content_id
                },
                data: {                    
                    slug,
                    content
                }
            })
        } catch (e) {
            console.error(e)
            return fail(500, { message: 'Error Updating Content'})
        }

        return {
            status: 201
        }
    }
};