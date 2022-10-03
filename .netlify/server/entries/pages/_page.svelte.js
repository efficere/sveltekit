import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"flex bg-[url('https://media.graphassets.com/Bw2aguyyQlqjFezaPiAD')] bg-cover bg-no-repeat h-600 rounded-xl p-5 shadow-md"}"><div class="${"flex flex-col gap-1 justify-center text-white"}"><h2 class="${"font-panton font-light"}">Aprimore sua vida Financeira</h2>
        <h1 class="${"font-panton font-bold text-4xl w-2/3"}">Profissionalize-se, conhe\xE7a nossos cursos para o mercado de trabalho</h1>
        <p class="${"font-muli"}">A oportunidade est\xE1 em suas m\xE3os, pegue e cres\xE7a!</p>
        <a href="${"https://newlifeeducacao.com.br/cursos"}"><button class="${"btn btn-primary"}">Conhe\xE7a nossos cursos</button></a></div>
</section>`;
});
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="${"card w-96 bg-base-100 shadow-xl"}"><figure><img src="${"https://placeimg.com/400/225/arch"}" alt="${"Shoes"}"></figure>
        <div class="${"card-body"}"><h2 class="${"card-title"}">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
