<script>
    // Card para destaques - v0.0.1
    // Uso de ícone com texto (título e/ou descrição) lado a lado e bloco em telas menores.
    export let classes = "";
    export let imgClasses = "";
    export let descClasses = "";
    export let titleCard = "";
    export let descCard = "";
    export let src = "";
</script>

<div class="flex flex-wrap h-max gap-5 items-center justify-center min-w-208 w-full p-2 sm:p-5 {classes}">
    <div class="flex justify-center lg:w-1/5">
        <img {src} alt="Ícone" class="w-24 {imgClasses}">
    </div>
    <div class="lg:w-9/12">
        <h2 class="text-black font-panton font-light">{@html titleCard}</h2>
        <p class="text-black texto {descClasses}">{@html descCard}</p>
    </div>
</div>

<style>

</style>