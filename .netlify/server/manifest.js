export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/century_schoolbook-italic.ttf","fonts/century_schoolbook.ttf","fonts/muli.ttf","fonts/panton_bold.otf","fonts/panton_lightcaps.otf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf"},
	_: {
		entry: {"file":"_app/immutable/start-8ce9823b.js","imports":["_app/immutable/start-8ce9823b.js","_app/immutable/chunks/index-3f73c336.js","_app/immutable/chunks/singletons-bae8f49d.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
