<script>
    // Form v0.0.1

    // prop que lida com as classes CSS adicionais
    export let classes="";
</script>

<form method="POST" class="flex flex-col items-center justify-center min-w-[18.75rem] bg-cover bg-no-repeat rounded-xl py-10 px-5 {classes}">
    <slot></slot>
</form>