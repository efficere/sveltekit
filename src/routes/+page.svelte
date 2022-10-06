<script>
    import SectionBgImg from '$lib/components/sections/sec-bg_img.svelte';

    import WrapContent from '$lib/components/wrappers/wrap-block.svelte';
    import WrapGd from '$lib/components/wrappers/wrap-grid.svelte';

    import Card from '$lib/components/cards/card.svelte';
    import CardDestaque from '$lib/components/cards/card-side-img_txt.svelte';
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
    <!-- Hero -->
    <SectionBgImg classes="bg-[url('https://media.graphassets.com/Bw2aguyyQlqjFezaPiAD')] shadow-md bg-cover bg-left xl:bg-right h-[28.125rem] xl:h-600">
        <WrapContent classes="text-white gap-1">
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
    
    <!-- Cursos em destaque -->
    <section>
        <WrapGd classes="min-w-272 md:grid-cols-2 xl:grid-cols-3">
            <Card srcBgCard="https://media.graphassets.com/nM6lJbAlRhGfYRW4zq2H" titleCard="Profissões de supermercado"/>
            <Card srcBgCard="https://media.graphassets.com/o3kDTJKLTjOlTC8N6QuF" titleCard="Montagem e manutenção de computadores e redes"/>
            <Card srcBgCard="https://media.graphassets.com/ndn759r3T1W0GcXjflZO" titleCard="Consultor comercial"/>
            <Card srcBgCard="https://media.graphassets.com/ZTiy5KP8R6a6QZSID16y" titleCard="Auxiliar de farmácia"/>
            <Card srcBgCard="https://media.graphassets.com/5GlvrjX1Qc63KFoe7cm4" titleCard="Recepção hoteleira"/>
            <Card srcBgCard="https://media.graphassets.com/Hk0beJXORYGghVbUmPTy" titleCard="Gestão empresarial"/>
        </WrapGd>
    </section>

    <!-- Trabalhe conosco -->
    <SectionBgImg classes="bg-[url('https://media.graphassets.com/p5zs4XB2SVuW1dylPkYV')] shadow-md bg-cover h-[28.125rem] xl:h-600">
        <WrapContent classes="text-white">
            <h1 class="font-panton font-bold text-2xl xl:text-5xl w-11/12">Somos uma empresa profissional com mais de 20 anos de experiência no mercado</h1>
            <Button
                classes="btn-primary mt-5 font-panton font-bold normal-case"
                href="https://newlifeeducacao.com.br/tabalhe-conosco"
                tituloBotao="Trabalhe conosco"
            />
        </WrapContent>
    </SectionBgImg>
    
    <!-- Institucional -->
    <section>
        <WrapContent classes="text-white min-w-272 gap-5">
            <div>
                <h3 class="text-black font-panton font-light">Sobre nós</h3>
                <p class="text-black font-centurySchoolbook leading-relaxed">A New Life Educação nasceu em 1999. Sob a ótica do Grupo New Life, iniciou suas atividades ofertando cursos de qualificação profissional. Em 2012, a Escola Técnica New Life foi criada e com ela o início de cursos técnicos, fortalecendo o compromisso contínuo com uma educação de qualidade e focada no mercado de trabalho. No ano de 2022 a criação de uma metodologia própria e inovadora (chamada Liww for Life), deu início a uma nova era dentro da New Life Educação: <a href="https://newlifeeducacao.com.br/metodologia" class="link">ensino empreendedor focado no desenvolvimento humano</a>. Atualmente, somos escola profissionalizante, técnica e empreendedora. Conheça abaixo alguns de nossos prêmios e confira os nossos valores e missão como instituição educacional. Trilhe o melhor caminho e venha para o novo!</p>
            </div>
            <WrapContent classes="text-white gap-2">
                <Accordion tituloAccordion="Premiações" sumClasses="pl-5 items">
                    <WrapGrid slot="container" classes="lg:grid-cols-2 xl:grid-cols-3">
                        <Card 
                            srcImageCard="https://media.graphassets.com/S4TSZ00dQHOOC7Mmdulg"
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
                    </WrapGrid>
                </Accordion>
                <Accordion tituloAccordion="Valores" sumClasses="pl-5 items">
                    <WrapContent slot="container" classes="gap-10 items-center">
                        <CardDestaque
                            classes="lg:w-4/5 rounded-3xl border-r-2 border-t-2 border-azul4 shadow-azul4 shadow-card"
                            src="https://media.graphassets.com/oyIb1N3uQE2wXgdBeWwD"
                            titleCard="Missão"
                            descCard="Formar pessoas de todas as idades para atuarem nas mais diversas áreas. Estimular o desenvolvimento do caráter e da personalidade do aluno assim como atributos sociais e de convivência."
                        />
                        <CardDestaque
                            classes="lg:w-4/5 rounded-3xl border-r-2 border-t-2 border-laranja shadow-laranja shadow-card--destaque"
                            src="https://media.graphassets.com/RYeQkNgRYm7nDwqpsHvI"
                            titleCard="Valores"
                            descCard="Acreditamos no potencial de nossa equipe. Investimos no bem-estar de nossos colaborares e os incentivamos a crescer dia após dia. Somos referência na área de educação e premiados internacionalmente! Ética, profissionalismo e foco no crescimento são nossos valores primordiais."
                        />
                        <CardDestaque
                            classes="lg:w-4/5 rounded-3xl border-r-2 border-t-2 border-azul4 shadow-azul4 shadow-card"
                            src="https://media.graphassets.com/k0XHk1qRUWclcxKYr85z"
                            titleCard="Objetivos"
                            descCard="Prestar um serviço de qualidade, inspirando e moldando pessoas para atingirem seus objetivos da melhor forma possível. Prezar pelo capricho e motivar as pessoas a fazerem o melhor possível, com foco na eficiência. Formar jovens e adultos aptos a distribuir e compartilhar conhecimento visando o bem em comum!"
                        />
                    </WrapContent>
                </Accordion>
            </WrapContent>
        </WrapContent>
    </section>
    
    <!-- Equipe -->
    <SectionBgImg classes="bg-[url('https://media.graphassets.com/JW5W1W4SsKnMfqoBK1vw')] bg-cover bg-center lg:bg-top lg:bg-contain">
        <WrapContent classes="text-white gap-10 items-center 2xl:mt-32">
            <div>
                <h2 class="font-panton font-light">Conheça nossa equipe</h2>
                <h1 class="font-panton font-bold text-5xl">Equipe de alta performance, qualificada para melhor te atender</h1>
            </div>
            <WrapGd classes="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleClasses="lg:text-black"
                    titleCard="Cláudia Lucher"
                    descClasses="lg:text-black"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleClasses="lg:text-black"
                    titleCard="Cláudia Lucher"
                    descClasses="lg:text-black"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleClasses="lg:text-black"
                    titleCard="Cláudia Lucher"
                    descClasses="lg:text-black"
                    descCard="Bacharel em Psicopedagogia"
                />
                <CardPerfil
                    src="https://picsum.photos/500"
                    cargo="Coordenadora Pedagógica"
                    titleClasses="lg:text-black"
                    titleCard="Cláudia Lucher"
                    descClasses="lg:text-black"
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

    <!-- Mentores -->
    <section>
        <WrapContent classes="text-black gap-5 items-center">
            <div>
                <h2 class="font-panton font-bold xl:text-3xl">Mentores</h2>
                <p class="font-centurySchoolbook leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus excepturi, ad minima praesentium nihil accusamus veniam similique atque, suscipit ratione libero quos doloribus? Error culpa explicabo odio nobis voluptatibus eos. Saepe fuga sunt iusto magnam. Dolores dolorum repellat temporibus veritatis odit corrupti consequuntur voluptatum cumque fuga quos ducimus, voluptas enim.</p>
            </div>
            <WrapGd classes="xl:grid-cols-2">
                <CardDestaque
                    src="https://picsum.photos/100"
                    imgClasses="rounded-full"
                    titleCard="Rony Marcon"
                    descClasses = "mx-5 italic"
                    descCard='" Como é gratificante após duas décadas ser reconhecido internacionalmente com a metodologia de ensino que proporciona a educação empreendedora em nossos alunos. Diante disso, é que nasceu a New Life Educação, com o pensamento de revolucionar o mindset dos nossos alunos. A nossa missão é fazer com que a metodologia dentro da sala de aula seja valiosa para toda a vida. "'
                />
                <CardDestaque
                    src="https://picsum.photos/100"
                    imgClasses="rounded-full"
                    titleCard="Rony Marcon"
                    descClasses = "mx-5 italic"
                    descCard='" Como é gratificante após duas décadas ser reconhecido internacionalmente com a metodologia de ensino que proporciona a educação empreendedora em nossos alunos. Diante disso, é que nasceu a New Life Educação, com o pensamento de revolucionar o mindset dos nossos alunos. A nossa missão é fazer com que a metodologia dentro da sala de aula seja valiosa para toda a vida. "'
                />
            </WrapGd>
            <video src="" class="w-full lg:w-2/4 min-w-[20rem] sm:min-w-[45rem] rounded-2xl shadow-md" controls></video>
        </WrapContent>
    </section>

    <!-- FAQ -->
    <SectionBgImg
        classes="bg-cover bg-center bg-[url('https://media.graphassets.com/jbITNnuYRwWU8XBsaHR1')] lg:bg-[url('https://media.graphassets.com/MNvfwXaaQSa5iiadRss0')] lg:bg-top xl:min-h-[45rem] xl:bg-left-top justify-center lg:justify-end lg:pt-0"    
    >
        <WrapContent classes="w-full lg:w-5/12 gap-5">
            <div class="h-[10%]">
                <h3 class="font-panton font-light text-azul5">Tire suas dúvidas</h3>
                <h2 class="font-panton font-bold text-3xl xl:text-5xl text-azul5">Perguntas Frequentes</h2>
            </div>
            <div class="flex flex-col gap-1 max-h-[37rem] lg:max-w-[32.25rem] overflow-x-auto pr-5 h-[90%]">
                <Accordion tituloAccordion="Os cursos são em EAD?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">Não. Apesar de serem, em sua maioria, no modelo interativo, as turmas são presenciais.</p>
                </Accordion>
                <Accordion tituloAccordion="O que é modelo/ensino interativo?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">É uma metodologia que usa da tecnologia como ferramenta de apoio, fornecendo maior autonomia para os alunos no processo de ensino e aprendizagem.</p>
                </Accordion>
                <Accordion tituloAccordion="Os certificados do curso são validos em qualquer lugar do País?" accContentClasses="content-blur" sumClasses="px-3 uppercase only-blur">
                    <p slot="content" class="font-centurySchoolbook">Sim, todos os certificados são registrados e regulamentados em âmbito nacional, sendo aceitos em qualquer parte do país.</p>
                </Accordion>
                <Accordion tituloAccordion="Os cursos são de nível técnico?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">Nossos cursos atualmente são de grau profissionalizante. Contamos com mais de 20 cursos na área de tecnologia e em especialidades como auxiliar de veterinário, atendente de farmácia e massagem com técnicas em massoterapia.</p>
                </Accordion>
                <Accordion tituloAccordion="Há algum período definido para ingressar nos cursos?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">Sim. Nos cursos do método interativo, por exemplo, cada aluno pode ingressar em um período, pois o desempenho e andamento é individual. <a href="https://newlifeeducacao.com.br/contato" class="link">Consulte os períodos entrando em contato conosco.</p>
                </Accordion>
                <Accordion tituloAccordion="Como são as provas dos cursos?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">Cada professor tem seu método de avaliação. Nos cursos do método interativo, por exemplo, existe uma avaliação para cada atividade realizada.</p>
                </Accordion>
                <Accordion tituloAccordion="As aulas que forem perdidas, poderão ser recuperadas?" sumClasses="px-3 only-blur" accContentClasses="content-blur">
                    <p slot="content" class="font-centurySchoolbook">Todas as aulas com faltas justificadas serão recuperadas durante o curso.</p>
                </Accordion>
            </div>
        </WrapContent>
    </SectionBgImg>
</main>

<style>
</style>