
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      // count: props.count
      count: 0
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const cnt = parseInt(json, 10)
      const count = JSON.parse(cnt);


      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }


  render() {
    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={this.handleAddOne} >+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}
// Counter.defaultProps = {
//   count: 0
// }
ReactDOM.render(<Counter />, document.getElementById('app'));














// let count = 0;

// const addOne = () => {
//   count++
//   renderCountApp()
// }
// const minusOne = () => {
//   count--
//   renderCountApp()
// }
// const reset = () => {
//   count = 0
//   renderCountApp()
// }


// const renderCountApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <br />
//       <button onClick={minusOne}>-1</button>
//       <br />
//       <button onClick={reset}>Reset</button>
//     </div>

//   )

// }
// renderCountApp()
// ReactDOM.render(templateTwo, appRoot);