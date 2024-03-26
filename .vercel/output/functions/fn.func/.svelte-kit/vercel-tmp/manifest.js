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
		client: {"start":"_app/immutable/entry/start.BtoRUeuh.js","app":"_app/immutable/entry/app.BSHwkqz5.js","imports":["_app/immutable/entry/start.BtoRUeuh.js","_app/immutable/chunks/entry.DaPN9y9A.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BSHwkqz5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B0G8WVAb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
