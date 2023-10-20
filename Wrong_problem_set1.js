/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2023-10-16 22:43:44
 * @LastEditTime: 2023-10-21 01:30:57
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \前端面试错题集\Wrong_problem_set1.js
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

const problem4 = () => {
  function Person(){}
  Person.prototype.name='name'

  var person=new Person()
  person.name='name of this person'
  console.log(person.name)
  //name of this person

  delete person.name
  console.log(person.name)
   //name
}

