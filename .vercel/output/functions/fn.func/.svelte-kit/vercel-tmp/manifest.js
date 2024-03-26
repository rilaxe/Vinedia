export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DFfdhHzo.js","app":"_app/immutable/entry/app.CTAFBr29.js","imports":["_app/immutable/entry/start.DFfdhHzo.js","_app/immutable/chunks/entry.C2NtmPA9.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CTAFBr29.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B0G8WVAb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
