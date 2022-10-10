<script>
    // Label v0.0.1

    // prop que lida com os atributos da tag label
    export let forId="";
    export let required=false;

    // prop que lida com as classes CSS adicionais
    export let classes="";
;</script>

<label class="text-white {classes}" for="{forId}">
    <slot/>
    <!-- se o campo for obrigatório, exibe um span com asterisco em vermelho após o nome da Label -->
    {#if required}
    <span class="text-cor2">*</span>
    {/if}
</label>