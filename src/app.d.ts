// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: {
				
			} | null;
		}
		interface PageData {}
		interface PageState {}
		interface Platform {}
		interface Error {}
	}
}

export {};
