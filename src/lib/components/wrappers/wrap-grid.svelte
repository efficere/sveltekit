<script>
    // Wrapper Grid, definição de colunas de forma responsiva - v0.0.1

    // prop que lida com as classes CSS adicionais
    export let classes="";

    // prop que lida com o tipo de wrapper
    export let type="";
</script>

{#if type="section"}
<section class="grid place-content-center place-items-center gap-10 grid-cols-1 {classes}">
    <slot></slot>
</section>
{:else}
<div class="grid place-content-center place-items-center gap-10 grid-cols-1 {classes}">
    <slot></slot>
</div>
{/if}