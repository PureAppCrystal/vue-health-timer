<template>
<div id="naviBar">
    <div>Home</div>
    <div>{{title}}</div>
    <div></div>
</div>

</template>

<script>

export default {
    name: 'naviBar',
    props: ["title"],
    methods: {
        
    }
}
</script>

<style scoped>

#naviBar {
    background-color: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

#naviBar div {
    width: 33%;
}
#naviBar div:nth-child(2){
    width: 60%;
}

</style>