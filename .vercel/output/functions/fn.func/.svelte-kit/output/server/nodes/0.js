

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.rPukBMTc.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B0G8WVAb.js"];
export const stylesheets = [];
export const fonts = [];
