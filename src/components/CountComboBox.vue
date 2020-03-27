<template>
<div class="countComboBox">
    <div class="ccb-items">
        <input id="setCount" type="number"  pattern="\d*" min="0" max="9" class="ccb-item" :value="count"  @keyup="numUp($event)" /> 
    </div>
    <div  class="ccb-btns">
        <div class="ccb-btn" @click="btnAdd($event)" @keypress="btnPress($event)"> +</div>
        <div class="ccb-btn" @click="btnMin($event)"> - </div>
    </div>
</div>
</template>


<script>
// import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: '',
    props:[
        // eslint-disable-next-line no-undef
        "type",
        "setCount",
    ],
    data() {
        return {
            //seconds: 60,
        }
    },
    computed: {
        count: function(){
            return parseInt(this.setCount);
        },
    },
    methods: {
        numDown: function(event) {
            console.log("====================")
            console.log("numDown", event.target.value)
            if( event.keyCode>= 48 && event.keyCode <=57) {
                event.target.value = event.key;
            }
        },
        numPress: function(event) {
            console.log("numPress : " , event.target.value)
            console.log("numPress : " , event.key)
            if( event.keyCode>= 48 && event.keyCode <=57) {
                event.target.value = event.key;
            }
        },
        numUp: function(event) {
            console.log("event : ", event);
            console.log("numUp : ", event.target.value)
            
            
            
            this.$emit("setSetting", this.type, event.target.value);
        },
        btnAdd: function(event) {
            const target = event.target;
            this.btnAnimation(target);
            this.$emit("setSetting", this.type, this.setCount + 1);
        },
        btnMin: function(event) {
            const target = event.target;
            this.btnAnimation(target);
            this.$emit("setSetting", this.type, this.setCount - 1);
        },
        btnAnimation: function(target) {
            target.classList.add('clicked');
            setTimeout(function() {
                target.classList.remove('clicked');
            }, 100)
        }

       

    },
    mounted() {

    },
    created() {

    }
}
</script>


<style scoped>
.countComboBox {
    height: 4rem;
    width: 13rem;
    border-radius: 5px;

    display: flex;
}
.ccb-items {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.ccb-item {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    border: none;
    outline: none;
    padding: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.ccb-btns {

}
.ccb-btn+.ccb-btn {
    border-top: solid 1px black;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 10px;
}
.ccb-btn {
    background-color: gray;
    font-size: 1.6rem;
    height: 2rem;
    width: 2rem;
    border-top-right-radius: 10px;
}
.ccb-btn.clicked {
    background-color: red;
}

</style>