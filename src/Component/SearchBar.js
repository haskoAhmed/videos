import React from 'react';

class SearchBar extends React.Component{
    state ={term: ''}

    onFormSubmit=(e) =>{
        e.preventDefault();
      this.props.onFormSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>search video</label>
                    <div className="field">
                        <input 
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                         />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;