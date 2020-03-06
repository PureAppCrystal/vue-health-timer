<template>
<div class="minSecComboBox">
    <div class="mscb-items">
        <input id="min1" type="number"  pattern="\d*" min="0" max="9" class="mscb-item" :value="min1"  @keyup="numUp($event)" /> <!--@keypress="numPress($event)" @keydown="numDown($event) -->
        <input id="min2" type="number"  pattern="\d*" min="0" max="9" class="mscb-item" v-model="min2" @keyup="numUp($event)"/>
        <div id="mscb-sep" class="mscb-item">:</div>
        <input id="sec1" type="number"  pattern="\d*" min="0" max="9" class="mscb-item" v-model="sec1" @keyup="numUp($event)"/>
        <input id="sec2" type="number"  pattern="\d*" min="0" max="9" class="mscb-item" v-model="sec2" @keyup="numUp($event)"/>
        
        {{time}}
    </div>
    <div  class="mscb-btns">
        <div class="mscb-btn" @click="btnAdd($event)" @keypress="btnPress($event)"> +</div>
        <div class="mscb-btn" @click="btnMin($event)"> - </div>
    </div>
</div>
</template>


<script>
// import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: '',
    props:[
        // eslint-disable-next-line no-undef
        "seconds",
    ],
    data() {
        return {
            //seconds: 60,
        }
    },
    computed: {
        time: function(){
            const seconds = this.seconds; 
            let min = Math.floor(seconds / 60);
            let sec = seconds % 60;
            if (min <10 ) {
                min = "0" + min;
            }
            if (sec <10 ) {
                sec = "0" + sec;
            }
            const result = min+":"+sec
            
            return result
        },
        min1: {
            get: function(){
                return parseInt(this.time.substring(0,1));
            },
            // set: function(value) {
            // }
        },
        min2: function(){
            return parseInt(this.time.substring(1,2));
        },
        sec1: function(){
            return parseInt(this.time.substring(3,4));
        },
        sec2: function(){
            return parseInt(this.time.substring(4,5));
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
            if( event.keyCode>= 48 && event.keyCode <=57) {
                const newValue = event.key;
                event.target.value = newValue;

                const {min1, min2, sec1, sec2} = this;
                switch(event.target.id) {
                    case "min1" :
                        this.seconds = newValue * 600
                                    + min2 * 60
                                    + sec1 * 10
                                    + sec2 * 1;
                        break;
                    case "min2" :
                        this.seconds = min1 * 600
                                    + newValue * 60
                                    + sec1 * 10
                                    + sec2 * 1;
                        break;
                    case "sec1" :
                        this.seconds = min1 * 600
                                    + min2 * 60
                                    + newValue * 10
                                    + sec2 * 1;
                        break;
                    case "sec2" :
                        this.seconds = min1 * 600
                                    + min2 * 60
                                    + sec1 * 10
                                    + newValue * 1;
                        break;

                }

                //focus 변경 
                let next = event.target.nextElementSibling;
                if (next == null) {
                    return;
                } else if (next.tagName == "DIV") {
                    next = next.nextElementSibling;
                }
                next.focus();   
            } else {
                return false;
            }
        },
        btnAdd: function(event) {
            const target = event.target;
            this.btnAnimation(target);
            this.seconds = this.seconds + 1;
        },
        btnMin: function(event) {
            const target = event.target;
            this.btnAnimation(target);
            this.seconds = this.seconds - 1;
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
.minSecComboBox {
    height: 4rem;
    width: 12rem;
    border-radius: 5px;

    display: flex;
}
.mscb-items {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.mscb-item {
    font-size: 3rem;
    width: 2rem;
    border: none;
    outline: none;
}

.mscb-btns {

}
.mscb-btn {
    background-color: gray;
    font-size: 1.6rem;
    height: 2rem;
    width: 2rem;
}
.mscb-btn.clicked {
    background-color: red;
}

</style>