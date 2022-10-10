<script>
    // Button v0.0.1

    // prop que lida com o endereço do link (quando houver)
    export let href="";
    
    // prop que lida com as classes CSS adicionais
    export let classes="";

    // prop que lida com o tipo de ação do botão
    export let type="";
</script>

<button class="btn shadow min-w-208 w-100 max-w-[25rem] h-20 text-xl md:px-8 rounded-3xl normal-case {classes}" {type}>
    <!-- caso possua href, insere tag <a> e o título do botão dentro dela -->
    {#if href}
    <a {href} class="flex w-full h-full justify-center items-center"><slot/></a>

    <!-- caso contrário exibe somente o título do botão -->
    {:else}
    <slot/>
    {/if}
</button>

<style>
    /* altera o estilo do plugin DaisyUI de acordo com o tema da aplicação (pode ser modificado diretamente no arquivo de acordo com a documentação: https://daisyui.com/theme-generator/) */
    button.btn-primary{
        @apply bg-cor3 border-cor3 hover:bg-orange-500 hover:border-orange-500;
    }
</style>