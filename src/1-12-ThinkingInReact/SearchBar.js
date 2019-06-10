import React, {Component} from 'react'

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleFilterTextInputChange=this.handleFilterTextInputChange.bind(this)
        this.handleInStockInputChange=this.handleInStockInputChange.bind(this)
    }

    handleFilterTextInputChange(e){
        this.props.onFilterTextInput(e.target.value)
    }

    handleInStockInputChange(e){
        console.log(!this.props.inStockOnly)
        console.log(e)
        // this.props.onInStockInput(e.target.checked)
        this.props.onInStockInput(!this.props.inStockOnly)
    }

    render(){
        return(
            <form>
                <input 
                    type='text' 
                    placeholder='Search...'
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}></input>
                <p>
                    <input 
                        type='checkbox' 
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}></input>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}