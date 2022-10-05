<script>
	import '../app.css';
    import Header from '$lib/components/header.svelte';
</script>

<div class="container mx-auto px-5 md:px-0">
    <header>
        <Header></Header>
    </header>
    <slot />
</div>