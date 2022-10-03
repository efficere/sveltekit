<script>
    export let bgImage="";
</script>

<section class="flex bg-cover bg-no-repeat h-600 rounded-xl p-5 shadow-md" style="background-image:url({bgImage})">
    <slot></slot>
</section>