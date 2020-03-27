<template>
<div id="tbt">
    <!-- navi -->
    <NaviBar class="naviBar" title="TBT"/>

     <!-- 셋팅상태 -->
    <div v-if="status==0" class="content-wrapper" >
         <div class="content-main" >
             
             <div id="tbt-training" class="tbt-count-item selectedType" @click="selectItem($event)">
                 <div>운동시간</div>
                 <div class="tbt-combo-input">
                     <MinSecComboBox :type="'training'" :seconds="trainingTime" @setSetting="setSetting"/>
                 </div>
             </div>
             <br>
             <div id="tbt-rest" class="tbt-count-item" @click="selectItem($event)" >
                 <div>휴식시간</div>
                 <div class="tbt-combo-input" >
                     <MinSecComboBox :type="'rest'" :seconds="restTime" @setSetting="setSetting"/>
                 </div>
             </div>
             <br>
             <div id="tbt-set" class="tbt-count-item" @click="selectItem($event)" >
                 <div>세트횟수</div>
                 <div class="tbt-combo-input" >
                     <CountComboBox :type="'set'" :setCount="setCount" @setSetting="setSetting"/>
                 </div>
             </div>
         </div>
         <div class="btn-area">
             <div class="btn btn-full">start</div>
         </div>
    </div>

    <!-- 운동상태 -->
    <div v-if="status==1" class="content-wrapper">
         <div class="content-main">
             training
         </div>
         <div class="btn-area">
             <div class="btn btn-full">puase</div>
         </div>
    </div>

    <!-- 일시중지 -->
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
import CountComboBox from '@/components/CountComboBox.vue'

export default {
    name: 'tbtPageView',
    components: {
        NaviBar,
        MinSecComboBox,
        CountComboBox,
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
        },
        selectItem: function(event) {
            // 다른거 다 삭제 
            const contentMain = document.getElementsByClassName("content-main");
            (contentMain[0].children).forEach(element => {
                element.classList.remove("selectedType")
            });
            // 선택 추가 
            event.target.closest(".tbt-count-item").classList.add("selectedType")
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
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
}


.content-wrapper {
    background-color: green;
    height:90%;
}

.content-wrapper .content-main:nth-child(1) {
    background-color: yellow;
    height: 80%;
}

.content-main {
    /* padding: 10px; */
}

.tbt-count-item{
    display: flex; 
    justify-content: space-around;
    align-items: center;

    padding: 10px;
    border: solid 1px gray;
    border-radius: 5px;
    /* padding-bottom: 10px; */
    
}
.selectedType {
    border: solid 1px red;
}

 .tbt-combo-input {
     
 }

.btn-area {
    background-color: gray;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}
.btn {
    
    
    background-color: white;
    margin: 1rem;
    /* text-align: center; */
    font-size: 2.8rem;
}
.btn-full {
    width: 100%;
}
.btn-half {
    width: 50%;
}
</style>