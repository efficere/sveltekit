<script>
	// Card - v0.0.1
	// Possibilita a utilização de uma imagem background ou uma imagem normal junto a um título com ou sem descrição

	// props que lidam com o conteúdo textual (links são inseridos diretamete via props - @html é utilizado)
	export let titleCard = "";
	export let descCard = "";

	// props que lidam com as classes CSS adicionais
	export let titleCardClasses = "";
	export let descCardClasses = "";

	// props que lidam com a fonte do background e da imagem
	export let srcBgCard = "";
	export let srcImageCard = "";


</script>

<div class="flex flex-col items-center justify-center rounded-2xl min-w-208 max-w-[24rem] w-full min-h-[24rem] h-full max-h-max bg-base-100 shadow">
	{#if srcBgCard && !srcImageCard}
	<div class="card-head h-4/5 w-full bg-no-repeat bg-cover bg-center rounded-t-2xl" style="background-image:url({srcBgCard})"></div>
	{/if}
	{#if srcImageCard && !srcBgCard}
	<img src="{srcImageCard}" class="w-full max-w-[15rem] rounded-lg" alt="Imagem ilustrativa do prêmio"/>
	{/if}
	
	{#if descCard}
	<div class="flex flex-col justify-center items-center min-h-1/5 h-fit max-h-max p-2">
		<h2 class="flex items-center text-center text-xl {titleCardClasses}">{@html titleCard}</h2>
		<p class="items-center text-center {descCardClasses}">
			{@html descCard}
		</p>
	</div>
	{:else}
	<div class="flex flex-col justify-center items-center h-1/5 max-h-fit p-2">
		<h2 class="flex items-center text-center text-xl {titleCardClasses}">{@html titleCard}</h2>
	</div>
	{/if}
</div>

<style>
</style>