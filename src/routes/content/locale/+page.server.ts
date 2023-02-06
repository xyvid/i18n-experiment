import type { Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        locales: await prisma.locale.findMany()
    }
}

export const actions: Actions = {
    createEvent: async ({ request })     => {
        const { title, native_title, code } = 
            Object.fromEntries(await request.formData()) as { title: string, native_title: string, code: string }

        try {
            await prisma.locale.create({
                data: {
                    title,
                    native_title,
                    code
                }
            })
        } catch (e) {
            console.error(e)
            return fail(500, { message: 'Error Creating Locale'})
        }

        return {
            status: 201
        }
    }
};