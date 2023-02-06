import { prisma } from "$lib/server/prisma";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ( { params }) => {
    try {
        let locales = await prisma.locale.findMany({
        include: {
            LocalText: true
            }
        });           
        
        let english  = await prisma.locale.findUnique({
            where: {
                code: 'en-us',
            },
            include: {
                LocalText: true
            }
        });
        
        return {
            locales: locales,
            english: english
        } 
    } catch (e) {
      console.error(e)
    }
}