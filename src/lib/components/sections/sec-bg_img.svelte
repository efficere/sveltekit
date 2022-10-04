<script>
    export let bgImage="";
    export let classes="";
</script>

<section class="flex bg-no-repeat min-h-max rounded-xl p-5 shadow-md min-w-272 {classes}" style="background-image:url({bgImage})">
    <slot></slot>
</section>