<script>
    export let classes="";
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