import React, { PureComponent, Fragment } from "react";

class Forms extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      textareaValue: "",
      selectValue: ["Coconut", "Lime"],
      selectData: ["Grapefruit", "Lime", "Coconut", "Mango"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleTextareaChange(e) {
    this.setState({ textareaValue: e.target.value });
  }
  // selsect 多选的方式
  handleSelectChange(e) {
    const eVale = e.target.value;
    const { selectValue } = this.state;
    if (this.isEqualityChange(selectValue, eVale)) {
      selectValue.forEach((item, index) => {
        if (item === eVale) {
          selectValue.splice(index, 1);
          return this.setState({ selectValue: selectValue });
        }
      });
    } else {
      selectValue.push(eVale);
      return this.setState({ selectValue: selectValue });
    }
  }
  // 判断是否选择的是已选值， true ， false
  isEqualityChange(data, value) {
    let isEquality = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === value) {
        return (isEquality = true);
      } else {
        isEquality = false;
      }
    }
    return isEquality;
  }

  handleSubmit(e) {
    alert(`A name was submitted ` + JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {
    const { inputValue, textareaValue, selectValue, selectData } = this.state;
    return (
      <Fragment>
        <div>表单（Forms）</div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ paddingTop: 20 }}>
            input:
            <input
              type="text"
              value={inputValue}
              onChange={this.handleChange}
            />
          </div>

          <div style={{ paddingTop: 20 }}>
            Essay:
            <textarea
              value={textareaValue}
              onChange={this.handleTextareaChange}
            />
          </div>
          <div style={{ paddingTop: 20 }}>
            pick your favorite flavor:
            <select
              multiple={true}
              value={selectValue}
              onChange={this.handleSelectChange}
            >
              {selectData.map(it => {
                return (
                  <option key={it} value={it}>
                    {it}
                  </option>
                );
              })}
              {/* <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option> */}
            </select>
          </div>

          <div style={{paddingTop:20}}>
             file：
             <input type='file'></input>
          </div>

          <div style={{ paddingTop: 20 }}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Fragment>
    );
  }
}
export default Forms;
