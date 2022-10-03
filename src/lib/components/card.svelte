<script>
	export let srcImageCard = "";
	export let title = "";
</script>

<div class="flex flex-col rounded-2xl w-96 min-h-[24rem] h-full max-h-max bg-base-100 shadow-xl">
	<div class="card-head h-4/5 w-full bg-no-repeat bg-cover bg-center rounded-t-2xl" style="background-image:url({srcImageCard})"></div>
	<div class="flex justify-center h-1/5 p-1">
		<h2 class="flex items-center text-center text-xl font-muli">{title}</h2>
	</div>
</div>

<style>
</style>