// 提取出来得组件
import React, { PureComponent, Fragment } from "react";

function AuthorInfo(props) {
  // 提取用户信息
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        style={{ height: "50px" }}
      />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

class Extracting extends PureComponent {
  render() {
    const { author, text, date } = this.props;
    return (
      <Fragment>
        <div>提出的子组件</div>
        <div className="comment">
          {/* <div className="userInfo">
            <img
              className="Avatar"
              src={author.avatarUrl}
              style={{ height: "50px" }}
            />
            <div className="UserInfo-name">{author.name}</div>
          </div> */}
          <AuthorInfo author={author} />
          <div className="comment-text">{text}</div>
          <div className="comment-date">{date}</div>
        </div>
      </Fragment>
    );
  }
}

export default Extracting;
