import { fail } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ( { params }) => {
    try {
      let result = await prisma.locale.findUnique({
        where: {
          code: params.lang,
        },
        include: {
          LocalText: true
        }
      })
      console.log('result', result)
      return {
        locale: result
      } 
    } catch (e) {
      console.error(e)
    }
}


export const actions: Actions = {
  createContent: async ({ request })     => {
      const { locale, slug, content } = 
          Object.fromEntries(await request.formData()) as { locale: string, slug: string, content: string }

      const locale_id = parseInt(locale); //# has to be a cleaner way to do this
      
      try {
          await prisma.localText.create({
              data: {
                  locale: {
                    connect: { id: locale_id}
                  },
                  slug,
                  content
              }
          })
      } catch (e) {
          console.error(e)
          return fail(500, { message: 'Error Creating Content'})
      }

      return {
          status: 201
      }
  }
};