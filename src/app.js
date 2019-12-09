class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // options: props.options
      options: []                       //since we are using localStorage
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleindivdelete = this.handleindivdelete.bind(this);

  }
  handleindivdelete(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handleAdd(text) {
    if (!text) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(text) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([text]) }))
  }

  handlePick() {
    const randnum = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randnum]
    alert(choice)

  }
  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     }
  //   })
  // }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (Options) {
        this.setState(() => ({ options: options }));
      }

    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, preState) {
    if (preState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }


  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

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

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.title && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// Indecision.defaultProps = {
//   options: []
// }//since we are using localStorage

Header.defaultProps = {
  title: 'Indecision'

  // class Action extends React.Component {

  //   render() {
  //     return (
  //       <div>
  //         <button
  //           onClick={this.props.handlePick}
}
//           disabled={!this.props.hasOptions}
//         >What should I do?</button>
//       </div>
//     )
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >What should I do?
        </button>
    </div>
  );
}

// s

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>RemoveAll</button>
      {props.options.length === 0 && <p>Please Add an option</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleindivdelete={props.handleindivdelete}
          />
        ))
      }
    </div>
  )
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.holder}
//       </div>
//     )
//   }
// }

const Option = (props) => {

  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleindivdelete(props.optionText)
      }}>remove</button>

    </div>
  )

}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAdd(e) {
    e.preventDefault();
    const text = e.target.elements.input.value.trim();
    const error = this.props.handleAdd(text);

    this.setState(() => ({ error: error }))
    if (!error) {
      e.target.elements.input.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAdd}>
          <input type="text" name="input" />
          <button>submit </button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<Indecision />, document.getElementById('app'))