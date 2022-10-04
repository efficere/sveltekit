<script>
    import WrapGd from '$lib/components/wrappers/wrap-grid.svelte';
    import WrapContent from './wrappers/wrap-content.svelte';

    export let tituloAccordion = "";
    export let tipoContainerAccordion = "";
    export let gapWrapContent="";
</script>

<details class="text-black">
    <summary class="pl-5 py-2 font-panton font-light border-2 border-black/10 hover:cursor-pointer">{tituloAccordion}</summary>
    <div class="p-7 border-2 border-orange-400 border-t-0 rounded-b-xl">
        {#if tipoContainerAccordion == "grid"}
        <WrapGd>
            <slot></slot>
        </WrapGd>
        {/if}
        {#if tipoContainerAccordion == "block"}
        <WrapContent {gapWrapContent}>
            <slot></slot>
        </WrapContent>
        {/if}
    </div>
</details>

<style>
    details > summary {
        list-style: none;
    }
    details > summary::-webkit-details-marker {
        display: none;
    }

    details[open] summary{
        @apply border-orange-400 border-b-0	rounded-t-xl text-white bg-[#083791];
    }
</style>