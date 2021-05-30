<template>
  <div id="home">
    <Nav><div slot="centent">首页</div></Nav>
    <div class="meals">
        <div class="goods">
            <img src="../../assets/img/food1.jpg">
            鱼香肉丝
            <div class="cart">
                  <a href="#" @click="del()" v-show="count>0">-</a>
                  <span>{{count}}</span>
                  <a href="#" @click="add()">+</a>
            </div>
        </div>
        <div class="goods">
            <img src="../../assets/img/food2.jpg">
            锅包肉
            <div class="cart">
                  <a href="#" @click="del()" v-show="count>0">-</a>
                  <span>{{count}}</span>
                  <a href="#" @click="add()">+</a>
            </div>
        </div>
        <div class="goods">
            <img src="../../assets/img/food3.jpg">
            宫保鸡丁
            <div class="cart">
                  <a href="#" @click="del()" v-show="count>0">-</a>
                  <span>{{count}}</span>
                  <a href="#" @click="add()">+</a>
            </div>
        </div>
        <div class="goods">
            <img src="../../assets/img/food4.jpg">
            溜肉段
            <div class="cart">
                  <a href="#" @click="del()" v-show="count>0">-</a>
                  <span>{{count}}</span>
                  <a href="#" @click="add()">+</a>
            </div>
        </div>
        <div class="goods">
            <img src="../../assets/img/food5.jpg">
            回锅牛肉
            <div class="cart">
                  <a href="#" @click="del()" v-show="count>0">-</a>
                  <span>{{count}}</span>
                  <a href="#" @click="add()">+</a>
            </div>
        </div>
  </div>
  <div class="tab">
      <div>共{{total}}份，共{{price}}元</div>
  </div>
  </div>
</template>

<script>
import Nav from '../../components/common/nav/Nav'
export default {
  components:{
    Nav,
  },
  data(){
      return{
          count:0
      }
  },
  computed:{
    total(){

    },
    price(){

    },
  },
    methods:{
        del(){
          count-=1;
          this.$http({
          method:'put',
          url:'/',
          data:{}
          }).then(res => {
            console.log(res);
            this.getCuisine();
            }).catch(err =>{
        cnsole.log(err);
      })
    },
        add(){
      count+=1;
      this.$http({
        method:'put',
        url:'/',
        data:{}
      }).then(res => {
        console.log(res);
        this.getCuisine();
      }).catch(err =>{
        console.log(err);
      })
    },
        
    }
}
</script>

<style>
.meals img{
    height: 200px;
    width: 300px;
    margin-right: 50px;
}
.meals{
    padding-bottom: 50px;
    margin-left:50px ;
}
.meals .goods{
    display: flex;
    align-items:center;
    margin-top: 50px;
}
.meals .cart{
    margin-left: 800px;
}
.tab{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 44px;
    color: black;
    text-align: center;
    line-height: 44px;
    background-color: pink;

}
</style>