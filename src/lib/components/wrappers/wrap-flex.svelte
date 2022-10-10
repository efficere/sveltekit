<script>
    // Wrapper Flex, distribuição horizontal em telas grandes e bloco em telas menores - v0.0.1

    // prop que lida com as classes CSS adicionais
    export let classes="";

    // prop que lida com o tipo de wrapper
    export let type="";
</script>

{#if type="section"}
<section class="flex flex-wrap {classes}">
    <slot></slot>
</section>
{:else}
<div class="flex flex-wrap {classes}">
    <slot></slot>
</div>
{/if}