<script>
    import SectionBgImg from '$lib/components/sections/sec-bg_img.svelte';
    import WrapContent from '$lib/components/wrappers/wrap-content.svelte';
    import WrapGd from '$lib/components/wrappers/wrap-grid.svelte';
    import Card from '$lib/components/card.svelte';
</script>

<SectionBgImg bgImage="https://media.graphassets.com/Bw2aguyyQlqjFezaPiAD">
    <WrapContent>
        <h2 class="font-panton font-light">Aprimore sua vida financeira</h2>
        <h1 class="font-panton font-bold text-5xl w-2/3">Profissionalize-se, conheça nossos cursos para o mercado de trabalho</h1>
        <p class="font-muli">A oportunidade está em suas mãos, pegue e cresça!</p>
        <a href="https://newlifeeducacao.com.br/cursos">
            <button class="btn btn-primary">Conheça nossos cursos</button>
        </a>
    </WrapContent>
</SectionBgImg>

<section>
    <WrapGd>
        <Card srcImageCard="https://media.graphassets.com/nM6lJbAlRhGfYRW4zq2H" title="Profissões de supermercado"/>
        <Card srcImageCard="https://media.graphassets.com/o3kDTJKLTjOlTC8N6QuF" title="Montagem e manutenção de computadores e redes"/>
        <Card srcImageCard="https://media.graphassets.com/ndn759r3T1W0GcXjflZO" title="Consultor comercial"/>
        <Card srcImageCard="https://media.graphassets.com/ZTiy5KP8R6a6QZSID16y" title="Auxiliar de farmácia"/>
        <Card srcImageCard="https://media.graphassets.com/5GlvrjX1Qc63KFoe7cm4" title="Recepção hoteleira"/>
        <Card srcImageCard="https://media.graphassets.com/Hk0beJXORYGghVbUmPTy" title="Gestão empresarial"/>
    </WrapGd>
</section>

<SectionBgImg bgImage="https://media.graphassets.com/p5zs4XB2SVuW1dylPkYV">
    <WrapContent>
        <h1 class="font-panton font-bold text-5xl w-11/12">Somos uma empresa profissional com mais de 20 anos de experiência no mercado</h1>
        <a href="https://newlifeeducacao.com.br/cursos">
            <button class="btn btn-primary">Trabalhe conosco</button>
        </a>
    </WrapContent>
</SectionBgImg>

<style>
</style>