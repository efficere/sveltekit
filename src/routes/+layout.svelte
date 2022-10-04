<script>
	import '../app.css';
    import Header from '$lib/components/header.svelte';
</script>

<div class="container mx-auto px-5 md:px-0">
    <Header></Header>
    <main class="flex flex-col gap-20">
        <slot />
    </main>
</div>