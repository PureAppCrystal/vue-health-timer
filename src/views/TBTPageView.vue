<template>
<div id="tbt">
    <!-- navi -->
    <NaviBar class="naviBar" title="TBT"/>
     
    <div v-if="status==0" class="content-wrapper">
         <div class="content-main">
             setting
             <div style="display: flex; justify-content: space-around;" >
                 <div>운동시간</div>
                 <div >
                     {{trainingTime}}
                     <MinSecComboBox :type="'training'" :seconds="trainingTime" @setSetting="setSetting"/>
                 </div>
             </div>
             <br/>
             <div style="display: flex; justify-content: space-around;" >
                 <div>운동시간</div>
                 <div >
                     <MinSecComboBox :type="'rest'" :seconds="restTime" @setSetting="setSetting"/>
                 </div>
             </div>
             <br/>
             <div style="display: flex; justify-content: space-around;" >
                 <div>운동시간</div>
                 <div >
                     <MinSecComboBox :type="'set'" :seconds="setCount" @setSetting="setSetting"/>
                 </div>
             </div>
         </div>
         <div class="btn-area">
             <div class="btn btn-full">start</div>
             
         </div>
    </div>
    <div v-if="status==1" class="content-wrapper">
         <div class="content-main">
             training
         </div>
         <div class="btn-area">
             <div class="btn btn-full">puase</div>
         </div>
    </div>
    <div v-if="status==2" class="content-wrapper">
         <div class="content-main">
             pause
         </div>
         <div class="btn-area">
             <div class="btn btn-half">restart</div>
             <div class="btn btn-half">clear</div>
         </div>

    </div>


 
</div>    
</template>

<script>

import NaviBar from '@/components/NaviBar.vue'
import MinSecComboBox from '@/components/MinSecComboBox.vue'

export default {
    name: 'tbtPageView',
    components: {
        NaviBar,
        MinSecComboBox,
    },
    data() {
        return{
            status: 0, // 0: 셋팅상태, 1: 운동상태, 2: 일시중지상태
            trainingTime: 20,
            restTime: 10,
            setCount: 8,
            typeList:['training', 'rest', 'set'],
            selectedType: 'training',
        }
    },
    computed: {
    
    },
    methods: {
        setSetting: function(type, value) {
            console.log("seSetting : " , type, value);
            switch(type) {
                case "training" :
                    this.trainingTime = value
                    break;
                case "rest" :
                    this.restTime = value
                    break;
                case "set" :
                    this.setCount = value
                    break;


            }
        }
   
    },
    mounted() {
        console.log("====== TBTPageView mounted ======")
    }
    
}
</script>

<style scoped>

#tbt {
    height: 100%;
}


.content-wrapper {
    background-color: green;
    height:90%;
}

.content-wrapper .content-main:nth-child(1) {
    background-color: yellow;
    height: 80%;
}
.btn-area {
    background-color: gray;
    height: 20%;
    display: flex;
    
}
.btn {
    background-color: white;
    margin: 1rem;
    text-align: center;
    font-size: 2.8rem;
}
.btn-full {
    width: 100%;
}
.btn-half {
    width: 50%;
}
</style>