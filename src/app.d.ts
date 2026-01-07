// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		actualizarVariables: () => void;
		checkEnter: (event: KeyboardEvent, id: string) => void;
		loadImageFromInput: (target: EventTarget | null) => void;
		downloadAsJPG: () => void;
		exportLayersAsZIP: () => void;
	}
}

export {};
