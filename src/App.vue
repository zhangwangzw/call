<template>
  <div id="app">
    <router-view />
    <Tubb_naem_ds></Tubb_naem_ds>
  </div>
</template>

<script>
import Tubb_naem_ds from '@/components/Tubb.vue'
import {Home} from '@/utils/Home'

export default {
  name: 'HomeView',
  components: {
    Tubb_naem_ds
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    Home().then(res =>{
      console.log(res);
    this.banners = res.data.banner;
    this.recommends = res.data.recommend;
    })

  }
}
</script>

<style lang="less">
@import '@/assets/css/common.css';
</style>
