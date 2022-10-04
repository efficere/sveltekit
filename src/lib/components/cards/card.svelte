<script>
	// Card v0.0.1
	// Possibilita a utilização de uma imagem background ou uma imagem normal junto a um título com ou sem descrição
	export let srcBgCard = "";
	export let titleCard = "";
	export let descCard = "";
	export let srcImageCard = "";
	export let titleCardClasses = "";
	export let descCardClasses = "";
	export let imageCardClasses = "";
</script>

<div class="flex flex-col items-center justify-center rounded-2xl w-96 min-h-[24rem] h-full max-h-max bg-base-100 shadow-xl">
	{#if srcBgCard && !srcImageCard}
	<slot name="bg_image">
		<div class="card-head h-4/5 w-full bg-no-repeat bg-cover bg-center rounded-t-2xl" style="background-image:url({srcBgCard})"></div>
	</slot>
	{/if}
	{#if srcImageCard && !srcBgCard}
	<slot name="image">
		<img src="{srcImageCard}" class="w-full max-w-[15rem] rounded-lg {imageCardClasses}" alt="Imagem ilustrativa do prêmio"/>
	</slot>
	{/if}
	{#if descCard}
	<div class="flex flex-col justify-center items-center min-h-1/5 h-fit max-h-max p-2">
		<h2 class="flex items-center text-center text-xl {titleCardClasses}">{@html titleCard}</h2>
		<slot name="description">
			<p class="items-center text-center {descCardClasses}">
				{@html descCard}
			</p>
		</slot>
	</div>
	{:else}
	<div class="flex flex-col justify-center items-center h-1/5 max-h-fit p-2">
		<h2 class="flex items-center text-center text-xl {titleCardClasses}">{@html titleCard}</h2>
	</div>
	{/if}
</div>

<style>
</style>