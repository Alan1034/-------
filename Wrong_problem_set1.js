

const problem1 = () => {
  var name = "The Window"
  var object = {
    name: "My Object",
    getNameFunction: function () { return function () { return this.name } }
  }
  alert(object.getNameFunction()())
  // "The Window"
}

const problem2 = () => {
  var name = "The Window"
  var object = {
    name: "My Object",
    getNameFunction: function () { var _this = this; return function () { return _this.name } }
  }
  alert(object.getNameFunction()())
  // "My Object"
}

const problem3 = () => {
  var obj={
    say:function () {
      setTimeout(() => {
       console.log(this) 
      });
    }
  }
  obj.say()
  // "{say:f}"
}
problem3()

