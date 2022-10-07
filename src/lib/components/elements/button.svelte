<script>
    export let tituloBotao="";
    export let href="";
    export let classes="";
    export let type="";
</script>

<button class="btn shadow min-w-208 w-100 max-w-[25rem] h-20 text-xl md:px-8 rounded-3xl normal-case {classes}" {type}>
    {#if href}
    <a {href} class="flex w-full h-full justify-center items-center">{tituloBotao}</a>
    {:else}
    {tituloBotao}
    {/if}
</button>

<style>
    button.btn-primary{
        @apply bg-laranja border-laranja hover:bg-orange-500 hover:border-orange-500;
    }
</style>