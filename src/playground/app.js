class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePick = this.handlePick.bind(this)
  }

  handleAdd(text) {
    if (!text) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(text) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return { options: prevState.options.concat([text]) }
    })


  }

  handlePick() {
    const randnum = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randnum]
    alert(choice)

  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <h1>Title</h1>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAdd={this.handleAdd}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        {this.props.options.map((m) => <Option key={m} holder={m} />)}
        <option />
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.holder}
      </div>
    )
  }
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

    this.setState(() => {
      return {
        error: error
      }
    })
    e.target.elements.input.value = '';

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