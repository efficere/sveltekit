<script>
    import SectionBgImg from '$lib/components/sections/sec-bg_img.svelte';
    import WrapContent from '$lib/components/wrappers/wrap-content.svelte';
    import WrapGd from '$lib/components/wrappers/wrap-grid.svelte';
    import Card from '$lib/components/cards/card.svelte';
    import CardDestaque from '$lib/components/cards/card-destaque.svelte';
    import Accordion from '$lib/components/accordion.svelte';
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
        <Card srcBgCard="https://media.graphassets.com/nM6lJbAlRhGfYRW4zq2H" titleCard="Profissões de supermercado"/>
        <Card srcBgCard="https://media.graphassets.com/o3kDTJKLTjOlTC8N6QuF" titleCard="Montagem e manutenção de computadores e redes"/>
        <Card srcBgCard="https://media.graphassets.com/ndn759r3T1W0GcXjflZO" titleCard="Consultor comercial"/>
        <Card srcBgCard="https://media.graphassets.com/ZTiy5KP8R6a6QZSID16y" titleCard="Auxiliar de farmácia"/>
        <Card srcBgCard="https://media.graphassets.com/5GlvrjX1Qc63KFoe7cm4" titleCard="Recepção hoteleira"/>
        <Card srcBgCard="https://media.graphassets.com/Hk0beJXORYGghVbUmPTy" titleCard="Gestão empresarial"/>
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

<section>
    <WrapContent gapWrapContent="5">
        <div>
            <h3 class="text-black font-panton font-light">Sobre nós</h3>
            <p class="text-black font-muli">A New Life Educação nasceu em 1999. Sob a ótica do Grupo New Life, iniciou suas atividades ofertando cursos de qualificação profissional. Em 2012, a Escola Técnica New Life foi criada e com ela o início de cursos técnicos, fortalecendo o compromisso contínuo com uma educação de qualidade e focada no mercado de trabalho. No ano de 2022 a criação de uma metodologia própria e inovadora (chamada Liww for Life), deu início a uma nova era dentro da New Life Educação: ensino empreendedor focado no desenvolvimento humano (saiba mais <a href="https://newlifeeducacao.com.br/metodologia" class="link">aqui</a>). Atualmente, somos escola profissionalizante, técnica e empreendedora. Conheça abaixo alguns de nossos prêmios e confira os nossos valores e missão como instituição educacional. Trilhe o melhor caminho e venha para o novo!</p>
        </div>
        <WrapContent gapWrapContent="5">
            <Accordion tituloAccordion="Premiações" tipoContainerAccordion="grid">
                <Card 
                    srcImageCard="https://media.graphassets.com/S4TSZ00dQHOOC7Mmdulg" imageCardClasses="aspect-[250/298]"
                    titleCard="2008 - Prêmio Nacional"
                    titleCardClasses="font-panton font-light"
                    descCard="Master Pesquisas"
                    descCardClasses="font-muli"/>
                <Card 
                    srcBgCard="https://media.graphassets.com/iT9bRaJ2TrmRaHvkvyK5"
                    titleCard="2019 - International Star for Quality (ISQR)" titleCardClasses="font-panton font-light"
                    descCard="Business Initiative Directions (BID).<br>Genebra, Suíça" descCardClasses="font-muli"/>
                <Card 
                    srcBgCard="https://media.graphassets.com/2JOoaX6TrWQc7TiEq1gu"
                    titleCard="2021 - Quality Achievements Awards"
                    titleCardClasses="font-panton font-light"
                    descCard="European Society for Quality Research (ESQR).<br>Dubai, Emirados Árabes Unidos"
                    descCardClasses="font-muli"/>
            </Accordion>
            <Accordion tituloAccordion="Valores" tipoContainerAccordion="block" gapWrapContent="5">
                <CardDestaque borderColorCard="azul4" shdwColorCard="azul4"></CardDestaque>
                <CardDestaque borderColorCard="laranja" shdwColorCard="laranja" boxShdwCard="destaque"></CardDestaque>
                <CardDestaque></CardDestaque>
            </Accordion>
            
        </WrapContent>
    </WrapContent>
</section>

<style>
</style>