!function(t){function e(r){if(i[r])return i[r].exports;var l=i[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,e),l.l=!0,l.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e){new Vue({el:"#split-bill-app",data:{title:"Bill-Them-All",msg:"Welcome to Bill-ThemAll",summaryPrice:0,billItems:[]},computed:{totalPrice:function(){return parseFloat(this.getTotal()).toFixed(2)},vatPrice:function(){return parseFloat(1.1*this.getTotal()*.07).toFixed(2)},servicePrice:function(){return parseFloat(.1*this.getTotal()).toFixed(2)},summaryPrice2:function(){return parseFloat(1.17*this.getTotal()).toFixed(2)}},watch:{billItems:function(t){var e=this;this.summaryPrice=parseFloat(1.1*this.getTotal()+1.1*this.getTotal()*.07).toFixed(2);var i=this.getTotal();this.billItems.map(function(t){t.pay=parseFloat(t.price*e.summaryPrice/i).toFixed(2)})}},methods:{add:function(){var t={name:document.getElementById("name").value,price:document.getElementById("price").value,pay:document.getElementById("price").value};this.billItems.push(t),document.getElementById("addbill").reset()},getTotal:function(){return this.billItems.length<=0?0:1==this.billItems.length?parseFloat(this.billItems[0].price):this.billItems.reduce(function(t,e){return{price:parseFloat(t.price)+parseFloat(e.price)}}).price}}})}]);
//# sourceMappingURL=app.js.map