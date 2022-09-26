<template>
<div class="product-item">

<ul>
  <li v-for="(item,index) in list" :key="index">
    {{item.title}}
  </li>
</ul>

</div>
</template>

<script>
export default {
  name:'list',
  props:{
    list:{
      type: Array,
      default:()=>[
      {
        title:'列表1'
      },
      {
        title:'列表2'
      },
      {
        title:'列表3'
      },
    ]
    }
  }

}
</script>

<style  scoped lang="scss"> 
  .produc-item{


  }
 ul li{
  width: 30%;
  border: 1px solid #e4e4e4;
 }
</style>