/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2023-10-16 22:43:44
 * @LastEditTime: 2023-10-25 00:06:52
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \Front-end-interview-error-question-set\Wrong_problem_set1.js
 * 
 */


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
  var obj = {
    say: function () {
      setTimeout(() => {
        console.log(this)
      });
    }
  }
  obj.say()
  // "{say:f}"
}

const problem4 = () => {
  function Person() { }
  Person.prototype.name = 'name'

  var person = new Person()
  person.name = 'name of this person'
  console.log(person.name)
  //name of this person

  delete person.name
  console.log(person.name)
  //name
}


const problem5 = () => {
  // 关键在于var的作用域
  for (var index = 0; index < 5; index++) {
    setTimeout(() => {
      console.log(index)
    }, 0);
  }
  // 55555

  for (let index = 0; index < 5; index++) {
    setTimeout(() => {
      console.log(index)
    }, 0);
  }
  // 01234

  for (let index = 0; index < 5; index++) {
    setTimeout((i) => {
      console.log(i)
    }, 0, index);
  }
  // 01234

  const timer = (i) => {
    setTimeout(() => console.log(i), 0);
  }
  for (var i = 0; i < 5; i++) {
    timer(i);
  }
  // 01234

  for (var index = 0; index < 5; index++) {
    ((i) => {
      setTimeout(() => {
        console.log(i)
      }, 0);
    })(index)
  }
  // 01234
}

