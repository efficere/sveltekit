<script>
    export let forId="";
    export let classes="";
    export let required=false;
;</script>

<label class="text-white {classes}" for="{forId}">
    <slot/>
    {#if required}
    <span class="text-vermelho1">*</span>
    {/if}
</label>