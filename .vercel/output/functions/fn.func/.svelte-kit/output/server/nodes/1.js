

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DE4EzMnI.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B0G8WVAb.js","_app/immutable/chunks/entry.DaPN9y9A.js"];
export const stylesheets = [];
export const fonts = [];
