<script>
    import SectionBgImg from '$lib/components/sections/sec-bg_img.svelte';

    import WrapContent from '$lib/components/wrappers/wrap-block.svelte';
    import WrapGd from '$lib/components/wrappers/wrap-grid.svelte';

    import Card from '$lib/components/cards/card.svelte';
    import CardDestaque from '$lib/components/cards/card-destaque.svelte';
    import CardPerfil from '$lib/components/cards/card-perfil.svelte';

    import Button from '$lib/components/button.svelte';
    import Accordion from '$lib/components/accordion.svelte';
	import WrapGrid from '$lib/components/wrappers/wrap-grid.svelte';
</script>

<svelte:head>
    <title>Seja bem vindo(a) à New Life Educação</title>
    <meta name="description" content="Site da New Life Educação, escola de ensino técnico, profissionalizante e empreendedor. Cursos de informática, tecnologia, mercado de trabalho, profissionalizantes e técnicos. Envie seu currículo e concorra a diversas vagas de trabalho.">
    <meta property="og:image" content="https://media.graphassets.com/5H6iCDp7SKS19qB95Ugg" />
</svelte:head>

<main class="flex flex-col gap-20">
    <SectionBgImg bgImage="/img/hero.webp" classes="bg-cover bg-left xl:bg-right h-[28.125rem] xl:h-600">
        <WrapContent classes="gap-1">
            <h2 class="font-panton font-light">Aprimore sua vida FInanceira</h2>
            <h1 class="font-panton font-bold text-3xl xl:text-5xl xl:w-2/3">Profissionalize-se, conheça nossos cursos para o mercado de trabalho</h1>
            <p class="font-muli">A oportunidade está em suas mãos, pegue e cresça!</p>
            <Button
                classes="btn-primary mt-5 font-panton font-bold normal-case"
                href="https://newlifeeducacao.com.br/cursos"
                tituloBotao="Conheça nossos cursos"
            />
        </WrapContent>
    </SectionBgImg>
    
    <section>
        <WrapGd classes="min-w-272 md:grid-cols-2 xl:grid-cols-3">
            <Card srcBgCard="/img/profissoes_supermercado.webp" titleCard="Profissões de supermercado"/>
            <Card srcBgCard="/img/montmnt_comp.webp" titleCard="Montagem e manutenção de computadores e redes"/>
            <Card srcBgCard="/img/consultor_comercial.webp" titleCard="Consultor comercial"/>
            <Card srcBgCard="/img/auxiliar_farmacia.webp" titleCard="Auxiliar de farmácia"/>
            <Card srcBgCard="/img/recep_hotel.webp" titleCard="Recepção hoteleira"/>
            <Card srcBgCard="/img/gestao_empresarial.webp" titleCard="Gestão empresarial"/>
        </WrapGd>
    </section>
    
    <SectionBgImg bgImage="/img/bg-sobre.webp" classes="bg-cover h-[28.125rem] xl:h-600">
        <WrapContent>
            <h1 class="font-panton font-bold text-2xl xl:text-5xl w-11/12">Somos uma empresa profissional com mais de 20 anos de experiência no mercado</h1>
            <Button
                classes="btn-primary mt-5 font-panton font-bold normal-case"
                href="https://newlifeeducacao.com.br/tabalhe-conosco"
                tituloBotao="Trabalhe conosco"
            />
        </WrapContent>
    </SectionBgImg>
    
    <section>
        <WrapContent classes="min-w-272 gap-5">
            <div>
                <h3 class="text-black font-panton font-light">Sobre nós</h3>
                <p class="text-black font-centurySchoolbook leading-relaxed">A New Life Educação nasceu em 1999. Sob a ótica do Grupo New Life, iniciou suas atividades ofertando cursos de qualificação profissional. Em 2012, a Escola Técnica New Life foi criada e com ela o início de cursos técnicos, fortalecendo o compromisso contínuo com uma educação de qualidade e focada no mercado de trabalho. No ano de 2022 a criação de uma metodologia própria e inovadora (chamada Liww for Life), deu início a uma nova era dentro da New Life Educação: <a href="https://newlifeeducacao.com.br/metodologia" class="link">ensino empreendedor focado no desenvolvimento humano</a>. Atualmente, somos escola profissionalizante, técnica e empreendedora. Conheça abaixo alguns de nossos prêmios e confira os nossos valores e missão como instituição educacional. Trilhe o melhor caminho e venha para o novo!</p>
            </div>
            <WrapContent classes="gap-2">
                <Accordion tituloAccordion="Premiações">
                    <WrapGrid slot="container" classes="lg:grid-cols-2 xl:grid-cols-3">
                        <Card 
                            srcImageCard="/img/premio-master-2008.webp"
                            titleCard="2008 - Prêmio Nacional"
                            titleCardClasses="font-panton font-light"
                            descCard="Master Pesquisas"
                            descCardClasses="font-muli"/>
                        <Card 
                            srcBgCard="/img/premio-isq_bid-2019.webp"
                            titleCard="2019 - International Star for Quality (ISQR)" titleCardClasses="font-panton font-light"
                            descCard="Business Initiative Directions (BID).<br>Genebra, Suíça" descCardClasses="font-muli"/>
                        <Card 
                            srcBgCard="/img/premio-qa_esqr-2021.webp"
                            titleCard="2021 - Quality Achievements Awards"
                            titleCardClasses="font-panton font-light"
                            descCard="European Society for Quality Research (ESQR).<br>Dubai, Emirados Árabes Unidos"
                            descCardClasses="font-muli"/>
                    </WrapGrid>
                </Accordion>
                <Accordion tituloAccordion="Valores">
                    <WrapContent slot="container" classes="gap-10 items-center">
                        <CardDestaque
                            classes="border-azul4 shadow-azul4 shadow-card"
                            src="/img/icon-missao.svg"
                            titleCard="Missão"
                            descCard="Formar pessoas de todas as idades para atuarem nas mais diversas áreas. Estimular o desenvolvimento do caráter e da personalidade do aluno assim como atributos sociais e de convivência."
                        />
                        <CardDestaque
                            classes="border-laranja shadow-laranja shadow-card--destaque"
                            src="/img/icon-valores.svg"
                            titleCard="Valores"
                            descCard="Acreditamos no potencial de nossa equipe. Investimos no bem-estar de nossos colaborares e os incentivamos a crescer dia após dia. Somos referência na área de educação e premiados internacionalmente! Ética, profissionalismo e foco no crescimento são nossos valores primordiais."
                        />
                        <CardDestaque
                            classes="border-azul4 shadow-azul4 shadow-card"
                            src="/img/icon-objetivos.svg"
                            titleCard="Objetivos"
                            descCard="Prestar um serviço de qualidade, inspirando e moldando pessoas para atingirem seus objetivos da melhor forma possível. Prezar pelo capricho e motivar as pessoas a fazerem o melhor possível, com foco na eficiência. Formar jovens e adultos aptos a distribuir e compartilhar conhecimento visando o bem em comum!"
                        />
                    </WrapContent>
                </Accordion>
            </WrapContent>
        </WrapContent>
    </section>
    
    <SectionBgImg bgImage="/img/bg-equipe.webp" classes="bg-cover bg-center lg:bg-top lg:bg-contain">
        <WrapContent classes="gap-10 items-center">
            <div>
                <h2 class="font-panton font-light">Conheça nossa equipe</h2>
                <h1 class="font-panton font-bold text-5xl">Equipe de alta performance, qualificada para melhor te atender</h1>
            </div>
            <WrapGd classes="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleCard="Cláudia Lucher"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleCard="Cláudia Lucher"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleCard="Cláudia Lucher"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleCard="Cláudia Lucher"
                    descCard="Bacharel em Psicopedagogia"
                />
            </WrapGd>
            <Button
                classes="btn-primary mt-5 font-panton font-bold normal-case"
                href="https://newlifeeducacao.com.br/tabalhe-conosco"
                tituloBotao="Faça parte do nosso time!"
            />
        </WrapContent>
    </SectionBgImg>
</main>

<style>
</style>