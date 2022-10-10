<script>
    // Card para perfil com foto - v0.0.1
    // Uso de foto com subtitulo e descrição (titulo e texto) abaixo.

    // props que lidam com o conteúdo textual
    export let titleCard = "";
    export let descCard = "";
    export let cargo="";

    // prop que lida com a fonte da foto
    export let src = "";

    // props que lidam com as classes CSS adicionais
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