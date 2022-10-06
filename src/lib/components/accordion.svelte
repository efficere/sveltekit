<script>
    export let tituloAccordion = "";
    export let classes="";
    export let sumClasses="";
    export let accContentClasses="";
</script>

<details class="text-black {classes}">
    <summary class="py-2 font-panton font-light border-2 border-black/10 hover:cursor-pointer {sumClasses}">{tituloAccordion}</summary>
    <div class="accordion_content {accContentClasses}">
        <slot name="container">
            <slot name="content"></slot>
        </slot>
    </div>
</details>

<style>
    details > .items {
        list-style: none;
    }
    details > .items::-webkit-details-marker {
        display: none;
    }

    details[open] summary{
        @apply border-orange-400 border-b-0	rounded-t-xl text-white bg-[#083791];
    }
    details[open] .accordion_content{
        @apply p-7 border-2 border-orange-400 border-t-0 rounded-b-xl;
    }
    .content-blur{
        @apply bg-white/60 backdrop-blur-sm;
    }
    .only-blur{
        @apply backdrop-blur-md;
    }
</style>