<template>
<div id="main">
    <div id="appInfo">
        
    </div>
    <div id="menuList">
        <div id="tabata" class="modeItem" @click="goTBTMode()">
            tbt
        </div>
        <div id="tabata" class="modeItem">
            tbt
        </div>
    </div>
</div>    
</template>

<script>



export default {
    name: 'mainPageView',
    components: {
    },
    data() {
        return{

        }
    },
    computed: {
    
    },
    methods: {
        goTBTMode: function() {
            console.log("====== goTBTMode() ======")
            this.$router.push("/mode/tbt");
        }
    },
    mounted() {
        console.log("====== MainPage mounted ======")
    }
    
}
</script>

<style scoped>

#main {
    width: 100%;
    height: 100%;
}

#appInfo {
    
    background-color: blue;
    height: 50%;
}

#menuList {
    background-color: yellow;
    height: 50%;
}

.modeItem {
    width: 100%;
    height: 50%;
    background-color: gray;
    border-bottom: solid 1px ;
}
</style>