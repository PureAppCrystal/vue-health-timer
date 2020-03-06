<template>
<div id="tbt">
    <!-- navi -->
    <NaviBar class="naviBar" title="TBT"/>
     
    <div v-if="status==0" class="content-wrapper">
         <div>
             setting
         </div>
         <div class="btn-area">

         </div>
    </div>
    <div v-if="status==1" class="content-wrapper">
         <div>
             training
         </div>
         <div class="btn-area">

         </div>
    </div>
    <div v-if="status==2" class="content-wrapper">
         <div>
             pause
         </div>
         <div class="btn-area">

         </div>

    </div>


 
</div>    
</template>

<script>

import NaviBar from '@/components/NaviBar.vue'

export default {
    name: 'tbtPageView',
    components: {
        NaviBar,
    },
    data() {
        return{
            status: 0, // 0: 셋팅상태, 1: 운동상태, 2: 일시중지상태
        }
    },
    computed: {
    
    },
    methods: {
   
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

.btn-area {
    background-color: gray;
}
</style>