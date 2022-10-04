<script>
    export let tituloAccordion = "";
    export let classes="";
</script>

<details class="text-black {classes}">
    <summary class="pl-5 py-2 font-panton font-light border-2 border-black/10 hover:cursor-pointer">{tituloAccordion}</summary>
    <div class="accordion_content">
        <slot name="container">
            <slot></slot>
        </slot>
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
    details[open] .accordion_content{
        @apply p-7 border-2 border-orange-400 border-t-0 rounded-b-xl;
    }
</style>