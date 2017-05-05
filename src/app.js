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
      return this.getTotal()
    },
    vatPrice: function() {
      return (this.getTotal()* 1.1) * 0.07
    },
    servicePrice: function() {
      return this.getTotal() * 0.1
    },
    summaryPrice2: function() {
      return this.getTotal() * 1.17
    }
  },
  watch: {
    billItems: function(val) {
      this.summaryPrice = (this.getTotal() * 1.1) + ((this.getTotal()* 1.1) * 0.07)
    }
  },
  methods: {
    add: function() {
      var data = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value
      }
      this.billItems.push(data)
      document.getElementById("addbill").reset();
    },
    getTotal: function() {
      if (this.billItems.length <= 0) return 0
      if (this.billItems.length == 1) return this.billItems[0].price
      var tmp = this.billItems.reduce((a,b) => { return {price: a.price + b.price} })
      return tmp.price
    },
  }
})