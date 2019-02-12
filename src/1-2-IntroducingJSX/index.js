import React, { PureComponent } from "react";

// 在JSX中嵌入表达式
function formatName(user) {
    return user.firstName + ' '+ user.lastName
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
const element1 = (
    <h1>
        hello, {formatName(user)}
    </h1>
)

// JSX也是一个表达式
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }else{
        return <h1>Hello, stranger.</h1>
    }
}

// 用JSX指定属性值
// 在JSX中， class 变成了 className， tabindex 变成了 tabIndex
const element2 = <div tabIndex="0">11</div>
const element3 = <img src={user.imgUrl}/>

// JSX 指定子元素
const element4 = (
    <div>
        <h1>Hello!</h1>
        <h1>Good to see here.</h1>
    </div>
)
// JSX 防止注入攻击
// const title = response.potentiallyMaliciousInput
// const element5 = <h1>{title}</h1>

// JSX 表示对象
const element6 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
class IntroducingJSX extends PureComponent {
  render() {
    return <div>
        {element}
        {element1}

        -------------有姓名
        {getGreeting(user)}
        -------------没有姓名
        {getGreeting()}

        ---------------指定子元素
        {element4}

    </div>
  }
}

export default IntroducingJSX;
