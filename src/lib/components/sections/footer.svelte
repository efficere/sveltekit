<script>
    // Footer v0.0.1

    // prop que lida com as classes CSS adicionais
    export let classes="";

    // prop que lida com o nome da equipe de desenvolvimento
    export let equipe="";

    // prop que lida com a url da logo da holding
    export let srcLogoHolding="";

    // retorna o ano Atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
</script>

<footer class="min-h-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-5 py-5 {classes}">
    <nav>
        <ul class="flex flex-col">
            <slot/>
        </ul>
    </nav>
    <div class="flex flex-col">
        <!-- alterar o texto  -->
        <p class="text-center">© {anoAtual}<br>{equipe}</p>
    </div>
    <div class="flex flex-nowrap md:col-span-2 lg:col-span-1 justify-center items-end gap-2">
        <p>Uma empresa do grupo</p>
        <img src="{srcLogoHolding}" alt="" class="w-16">
    </div>
</footer>