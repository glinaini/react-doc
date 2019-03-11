import React, { PureComponent, Fragment } from "react";

function ListItems(props) {
  const numbers = props.numbers;
  const listItem = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItem}</ul>;
}

// 数据的 id 作为 key 值
function ListId(props) {
  const list = props.list;
  const listKeySetId = list.map(item => <li key={item.id}>{item.name}</li>);
  return <ul>{listKeySetId}</ul>;
}

// 当没有id 时，用数据的索引值index作为key值
function ListIndex(props) {
  const listNotId = props.numbers;
  const listKeyIndex = listNotId.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ul>{listKeyIndex}</ul>;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const list = [
  { id: 1, name: "id is 1" },
  { id: 2, name: "id is 2" },
  { id: 3, name: "id is 3" }
];

class ListsAndKey extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>列表（Lists）和键（key）</div>
        <ListItems numbers={numbers} />
        <ListId list={list} />
        <ListIndex numbers={numbers} />
      </Fragment>
    );
  }
}

export default ListsAndKey;
