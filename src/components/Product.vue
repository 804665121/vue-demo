<template>
  <div class="product">
    <div class="wrap">
     <div class="left">
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" alt="" srcset="">
     </div>
     <div class="right">
        <div class="wrap">
          <span class="name">{{name}}</span>
          <span class="desc">{{desc}}</span>
        </div>
        <div class="info">
            <div>
                <span class="unit">¥</span>
                <span class="price">{{price}}</span>
            </div>
            <span>x{{num}}</span>
        </div>
     </div>
    </div>

  </div>
</template>

<script>
export default {
  name:"product",
  props:{
    name:{
      type:String,
      default:"商品名称"
    },
    desc:{
      type:String,
      default:'商品介绍一下这个商品是干啥子的哦'
    },
    num:{
      type:Number,
      default:1
    },
    price:{
      type:String,
      default:'2'
    }
  }

}
</script>

<style lang="scss" scoped>
  .product{
    width: 100%;
    background-color: #e4e4e4;
    // border: 1px solid #ccc;
    .wrap{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      .left{
        width: 30%;
        background-color: aqua;
        height: 100%;
        display: flex;
        align-content: center;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
      }
      .right{
        padding: 0.5rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;   
        .wrap{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
          .desc{
            color: #646566;
            font-size: 0.9rem;
          }
        }
        .info{
          display: flex;
          justify-content: space-between;
          align-content: center;
          .price{
            // color: red;
            font-weight: bold;
          }
          
          .unit{
            font-size: 0.5rem;
          }
        }
      }
    }

  }

</style>