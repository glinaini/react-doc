// 可访问性
// 鼠标和指针事件
import React, { Component } from 'react';

export default class ISAccessibility extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.toggleContainer = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.onClickoutsideHandle = this.onClickoutsideHandle.bind(this)
    }

    componentDidMount() {
        console.log(1)
        window.addEventListener('click', this.onClickoutsideHandle)
    }
    componentWillUnmount() {
        console.log(2)
        window.removeEventListener('click', this.onClickoutsideHandle)
    }

    handleClick() {
        // this.setState({isOpen: !this.state.isOpen})
        this.setState(currentState => ({ isOpen: !currentState.isOpen }))
    }

    onClickoutsideHandle(event) {
        console.log(this.toggleContainer.current.contains(event.target))
        console.log(this.state.isOpen)
        console.log(3)
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false })
        }
    }

    render() {
        return <div>
            <div>12343</div>
            <div ref={this.toggleContainer}>
                <button onClick={this.handleClick}>selce on button</button>
                {this.state.isOpen ? (
                    <ul>
                        <li>option 1</li>
                        <li>option 2</li>
                        <li>option 3</li>
                    </ul>
                ) : null}
            </div>
        </div>
    }
}
