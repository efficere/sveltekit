<script>
    export let href="";
    export let item="";
    export let classes="";
</script>

<li>
    <a {href} class="hover:link hover:underline-offset-4 {classes}">{item}</a>
</li>