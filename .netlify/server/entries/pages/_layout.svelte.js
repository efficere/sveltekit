import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label tabindex="${"0"}" class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></label>
			<nav><ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a>Item 1</a></li>
					<li tabindex="${"0"}"><a class="${"justify-between"}">Parent
							<svg class="${"fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}"></path></svg></a>
						<ul class="${"p-2"}"><li><a>Submenu 1</a></li>
							<li><a>Submenu 2</a></li></ul></li>
					<li><a>Item 3</a></li></ul></nav></div>
		<img src="${"https://media.graphassets.com/k96esOtuS56tBfYyIh2f"}" class="${"w-1/2 h-auto min-w-100 max-w-200"}" alt="${""}"></div>
	<div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal p-0"}"><li><a>Item 1</a></li>
			<li tabindex="${"0"}"><a>Parent
					<svg class="${"fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}"><path d="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}"></path></svg></a>
				<ul class="${"p-2"}"><li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li></ul></li>
			<li><a>Item 3</a></li></ul></div>
	<div class="${"navbar-end"}"><a class="${"btn btn-primary"}">Login</a></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container mx-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <main class="${"flex flex-col gap-20"}">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
