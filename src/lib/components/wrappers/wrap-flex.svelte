<script>
    export let classes="";
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