<script>
    // Card para destaques - v0.0.1
    // Uso de ícone com texto (título e/ou descrição) lado a lado e bloco em telas menores.
    export let classes = "";
    export let titleCard = "";
    export let descCard = "";
    export let src = "";
</script>

<div class="flex flex-wrap h-max gap-5 items-center justify-center min-w-208 rounded-3xl border-r-2 border-t-2 w-full lg:w-4/5 p-2 sm:p-5 {classes}">
    <div class="flex justify-center lg:w-1/5">
        <img {src} alt="Ícone" class="w-24">
    </div>
    <div class="lg:w-9/12">
        <h2 class="text-black font-panton font-light">{@html titleCard}</h2>
        <p class="text-black font-centurySchoolbook leading-relaxed">{@html descCard}</p>
    </div>
</div>

<style>

</style>