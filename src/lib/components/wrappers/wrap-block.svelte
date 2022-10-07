<script>
    export let classes = "";
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