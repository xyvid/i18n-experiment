// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient } from "@prisma/client";

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}	
}
declare global {
	var prisma: PrismaClient
}

export {}
