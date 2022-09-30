<script>
	import '../app.css';
    import Header from '../lib/header.svelte';
</script>

<div class="container mx-auto">
    <Header></Header>
    <main>
        <slot />
    </main>
</div>