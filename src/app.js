var store = {
  billItem : {

  }
}
var app = new Vue({
  el: '#split-bill-app',
  data: {
    title: "Bill-Them-All",
    msg: 'Welcome to Bill-ThemAll',
    summaryPrice: 0,
    billItems: [
    ]
  },
  computed: {
    totalPrice: function() {
      return parseFloat(this.getTotal()).toFixed(2)
    },
    vatPrice: function() {
      return parseFloat((this.getTotal()* 1.1) * 0.07).toFixed(2)
    },
    servicePrice: function() {
      return parseFloat(this.getTotal() * 0.1).toFixed(2)
    },
    summaryPrice2: function() {
      return parseFloat(this.getTotal() * 1.17).toFixed(2)
    }
  },
  watch: {
    billItems: function(val) {
      console.log((this.getTotal() * 1.1))
      console.log((this.getTotal()* 1.1) * 0.07)
      this.summaryPrice = parseFloat((this.getTotal() * 1.1) + ((this.getTotal()* 1.1) * 0.07)).toFixed(2)
      var total = this.getTotal()
      var tmp = this.billItems.map((x)=>{
        x.pay = x.price * this.summaryPrice / total
      })
      console.log(tmp)
    }
  },
  methods: {
    add: function() {
      var data = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        pay: document.getElementById("price").value
      }
      this.billItems.push(data)
      document.getElementById("addbill").reset();
    },
    getTotal: function() {
      if (this.billItems.length <= 0) return 0
      if (this.billItems.length == 1) return parseFloat(this.billItems[0].price)
      //console.log(this.billItems)
      var tmp = this.billItems.reduce((a,b) => { return {price: parseFloat(a.price) + parseFloat(b.price)} })
      console.log(tmp.price)
      return tmp.price
    },
  }
})