<script>
    // Wrapper Block v0.0.1

    // prop que lida com as classes CSS adicionais
    export let classes = "";

    // prop que lida com o tipo de wrapper (questões de semântica)
    export let type="";
</script>

{#if type=="section"}
<section class="flex flex-col {classes}">
    <slot></slot>
</section>
{:else}
<div class="flex flex-col justify-center {classes}">
    <slot></slot>
</div>
{/if}