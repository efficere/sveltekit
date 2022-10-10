<script>
	// Drawer, menu responsivo - v0.0.1

</script>
<div class="drawer">
	<!-- input que aciona o menu mobile -->
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<!-- conteúdo interno do drawer (que é levemente empurrado à direita ao abrir o menu) -->
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar min-h-200 mb-10 justify-between container mx-auto">
			<!-- label/botão do input que aciona o menu -->
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-12 h-12 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<!-- logo -->
			<a href="https://newlifeeducacao.com.br" class="w-1/2 h-auto min-w-100 max-w-200">
                <img src="https://media.graphassets.com/k96esOtuS56tBfYyIh2f" alt="Logomarca">
            </a>
			<!-- menu horizontal em telas maiores -->
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<!-- itens do menu -->
					<slot name="itens-menu"/>
				</ul>
			</div>
		</div>
		<!-- Conteúdo da página -->
		<slot name="conteudo"/>
	</div>
	<!-- menu vertical aberto ao lado esquerdo em telas menores -->
	<div class="drawer-side">
		<!-- overlay (fica acima do conteúdo interno do drawer) -->
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
			<!-- itens do menu -->
			<slot name="itens-menu"/>
		</ul>
	</div>
</div>