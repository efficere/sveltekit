<script>
    // Item de menu v0.0.1

    // prop que lida com o endereço do link
    export let href="";

    // prop que lida com as classes CSS adicionais
    export let classes="";
</script>

<li>
    <a {href} class="hover:link hover:underline-offset-4 {classes}"><slot/></a>
</li>