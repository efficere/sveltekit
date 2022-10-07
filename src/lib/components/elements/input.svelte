<script lang="ts">
    export let type="";
    export let placeholder="";
    export let required:null|boolean=false;
    export let autocomplete:null|string="";
    export let name = "";
    export let id="";
    export let classes="";
    
    let pattern:null|string="";
    let ptrnTxt="^[a-zA-Z ]*$";
    let ptrnTel="[0-9]{10,}$";

    // verificações
    switch(type){
        case "text": pattern = ptrnTxt;
        break
        case "tel": pattern = ptrnTel;
        break
        default: pattern = null;
    }

    if(!(autocomplete=="on")){
        autocomplete = null;
    }
    if(!(required==true)){
        required = null;
    }
</script>

<input class="bg-white p-3 rounded-xl text-black/80 {classes}" {type} {placeholder} {name} {id} {required} {autocomplete} {pattern}>