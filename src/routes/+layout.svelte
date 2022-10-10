<script>
	import '../app.css';
	import Footer from '$lib/components/sections/footer.svelte';
	import WrapBlock from '$lib/components/wrappers/wrap-block.svelte';
	import MenuItem from '$lib/components/elements/menu-item.svelte';
	import MenuDrawer from '$lib/components/menu-drawer.svelte';
</script>

<MenuDrawer>
    <div slot="itens-menu" style="display:contents">
        <MenuItem
            classes="font-panton font-bold text-cor1_4 text-xl"
            href="https://newlifeeducacao.com.br/cursos"
        >Cursos</MenuItem>
        <MenuItem
            classes="font-panton font-bold text-cor1_4 text-xl"
            href="https://newlifeeducacao.com.br/institucional"
        >Institucional</MenuItem>
        <MenuItem
            classes="font-panton font-bold text-cor1_4 text-xl"
            href="https://newlifeeducacao.com.br/trabalhe-conosco"
        >Trabalhe Conosco</MenuItem>
        <MenuItem
            classes="font-panton font-bold text-cor1_4 text-xl"
            href="https://newlifeeducacao.com.br/contato"
        >Contato</MenuItem>
    </div>
    <WrapBlock classes="container mx-auto px-5 md:px-0 gap-24" slot="conteudo">
        <slot />
        <Footer
            classes="bg-cor1_1 rounded-t-xl text-white font-muli shadow-footer shadow-black/20"
            equipe="Time de Desenvolvimento de Sistemas"
            srcLogoHolding="https://media.graphassets.com/ZMR3ojoTTgaPAh2xUN8H"
        >
            <MenuItem
                href="https://newlifeeducacao.com.br/documentos-legais"
            >Documentos legais</MenuItem>
        </Footer>
    </WrapBlock>
</MenuDrawer>