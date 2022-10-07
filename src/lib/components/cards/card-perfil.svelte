<script>
    // Card para destaques - v0.0.1
    // Uso de ícone com texto (título e/ou descrição) lado a lado e bloco em telas menores.
    export let titleCard = "";
    export let descCard = "";
    export let cargo="";
    export let src = "";
    export let titleClasses = "";
    export let descClasses = "";
</script>

<div class="flex flex-wrap h-max gap-5 items-center justify-center min-w-272 rounded-3xl w-4/5 p-5">
    <div class="text-center">
        <h3 class="font-panton font-light">{cargo}</h3>
        <img {src} alt="Ícone" class="rounded-xl shadow shadow-black/40">
    </div>
    <div class="text-center">
        <h2 class="font-panton font-bold {titleClasses}">{titleCard}</h2>
        <p class="font-muli {descClasses}">{descCard}</p>
    </div>
</div>

<style>

</style>