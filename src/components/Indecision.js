import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
class Indecision extends React.Component {

  constructor(props) {
    super(props);
    state = {
      // options: props.options
      options: []                    //since we are using localStorage
    }


  }
  handleindivdelete = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handleAdd = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handlePick = () => {
    const randnum = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randnum]
    alert(choice)

  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     }
  //   })
  // }
  componentDidMount() {
    //fetching data
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      console.log("opts", options)

      if (Options) {
        this.setState(() => ({ options: options }));
      }

    } catch (e) {
      console.log(e)

    }
  }
  componentDidUpdate(prevProps, preState) {
    console.log('preState.options.length', preState.options.length)
    console.log('preset', preState.options.length)
    if (preState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      console.log("json", json)
      localStorage.setItem('options', json)
    }
  }
  // componentWillUnmount() {
  //   console.log('component will unmount')
  // }




  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>

        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleindivdelete={this.handleindivdelete}

        />
        <AddOption
          handleAdd={this.handleAdd}
        />
      </div>
    )
  }
}

Indecision.defaultProps = {
  options: []
}

export default Indecision