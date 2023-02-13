import { writable, get } from 'svelte/store';
import type { LocalText, Locale } from '@prisma/client';


const init: LocalText[] = [];
const initLocale: Locale = {
    id: 0,
    code: "",    
    title: "",
    native_title: "",
    dir: ""
}


// these stores will be populated from data on application init - currently via Prisma in the root +layout.server.ts
export const localContent = writable(init);
export const defaultContent = writable(init);
export const activeLocale = writable(initLocale);


//# i think what we actually want to do here is a derived store with custom subscribe but unsure of exact pattern, this works for now but isn't reactive

// return localized text for requested slug. return en-us if local content not found.
export const _ = (slug: string) => {
    let content = get(localContent).find(i => i.slug === slug);
    if (!content) {
        content = get(defaultContent).find(i => i.slug === slug);
    }
    if (!content) {
        console.error('Missing text content in default (en-us) dictionary. Did you use the correct slug?', slug)
    }

    return content?.content;
}

// find localized text for requested slug, return null if not found
export const getLocalText = (slug: string) => {
    let content = get(localContent).find(i => i.slug === slug);
    return content ? content.content : null;
}

// find default (en-us) text for requested slug, return null if not found
export const getDefaultText = (slug: string) => {
    let content = get(defaultContent).find(i => i.slug === slug);
    if (content) {
        return content.content;
    } else {
        console.error('Missing text content in default (en-us) dictionary. Did you use the correct slug?', slug)
        return null;
    }
}

export const localNumber = (number: number) => {

}

export const localCurrency = (number: number) => {
    
}

export const localDate = (date: Date) => {
    return date.toLocaleDateString(get(activeLocale).code, { weekday:"long", year:"numeric", month:"short", day:"numeric"});
}

export const localTime = (time: Date) => {
    return time.toLocaleTimeString(get(activeLocale).code);
}