//#region src/client/env.ts
const context = (() => {
	if (typeof globalThis !== "undefined") return globalThis;
	else if (typeof self !== "undefined") return self;
	else if (typeof window !== "undefined") return window;
	else return Function("return this")();
})();
const defines = {"__VUE_OPTIONS_API__": true, "__VUE_PROD_DEVTOOLS__": false, "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__": false};
Object.keys(defines).forEach((key) => {
	const segments = key.split(".");
	let target = context;
	for (let i = 0; i < segments.length; i++) {
		const segment = segments[i];
		if (i === segments.length - 1) target[segment] = defines[key];
		else target = target[segment] || (target[segment] = {});
	}
});

//#endregion