<script lang="ts">
    // Input v0.0.1

    // props que lidam com as características do input
    export let type="";
    export let placeholder="";
    export let required:null|boolean=false;
    export let autocomplete:null|string="";
    export let name = "";
    export let id="";

    // prop que lida com as classes CSS adicionais
    export let classes="";
    
    // variáveis de padrões para verificação 
    let pattern:null|string="";
    // padrão para input text
    let ptrnTxt="^[a-zA-Z ]*$";
    // padrão para input tel
    let ptrnTel="[0-9]{10,}$";
    // verifica qual é o tipo do input e define o padrão correto, caso não seja do tipo text ou tel, não é necessário padrão (variável null)
    switch(type){
        case "text": pattern = ptrnTxt;
        break
        case "tel": pattern = ptrnTel;
        break
        default: pattern = null;
    }

    // se o autocomplete não for setado (diferente de "on") então não o exibe (variável null) na tag. Torna o código final mais limpo sem atributos desnecessários
    if(!(autocomplete=="on")){
        autocomplete = null;
    }

    // se o campo não for obrigatório, não exibe required na tag (variável null)
    if(!(required==true)){
        required = null;
    }
</script>

<input class="bg-white p-3 rounded-xl text-black/80 {classes}" {type} {placeholder} {name} {id} {required} {autocomplete} {pattern}>