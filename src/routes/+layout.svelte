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
            classes="font-panton font-bold text-azul5 text-xl"
            href="https://newlifeeducacao.com.br/cursos"
            item="Cursos"
        />
        <MenuItem
            classes="font-panton font-bold text-azul5 text-xl"
            href="https://newlifeeducacao.com.br/institucional"
            item="Institucional"
        />
        <MenuItem
            classes="font-panton font-bold text-azul5 text-xl"
            href="https://newlifeeducacao.com.br/trabalhe-conosco"
            item="Trabalhe Conosco"
        />
        <MenuItem
            classes="font-panton font-bold text-azul5 text-xl"
            href="https://newlifeeducacao.com.br/contato"
            item="Contato"
        /> 
    </div>
    <WrapBlock classes="container mx-auto px-5 md:px-0 gap-24" slot="conteudo">
        <slot />
        <Footer classes="bg-azul2 rounded-t-xl text-white font-muli shadow-footer shadow-black/20">
            <MenuItem
                href="https://newlifeeducacao.com.br/documentos-legais"
                item="Documentos legais"
            />
        </Footer>
    </WrapBlock>
</MenuDrawer>