<script>
// @ts-nocheck

    export let classes="";
    export let name="";
</script>

<form {name} class="flex flex-col items-center justify-center min-w-[18.75rem] bg-cover bg-no-repeat rounded-xl border-t-laranja py-10 px-5 {classes}" netlify>
    <slot></slot>
</form>