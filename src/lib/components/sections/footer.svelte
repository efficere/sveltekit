<script>
    export let classes="";
</script>

<footer class="min-h-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-5 py-5 {classes}">
    <nav>
        <ul class="flex flex-col">
            <slot/>
        </ul>
    </nav>
    <div class="flex flex-col">
        <img src="" alt="" class="logo">
        <p class="direitos text-center">© 2022<br>Time de desenvolvimento de sistemas</p>
    </div>
    <div class="flex flex-nowrap md:col-span-2 lg:col-span-1 justify-center items-end gap-2">
        <p class="holding">Uma empresa do grupo</p>
        <img src="https://media.graphassets.com/ZMR3ojoTTgaPAh2xUN8H" alt="" class="logo-holding w-16">
    </div>
</footer>