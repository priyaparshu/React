class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.onShowClick = this.onShowClick.bind(this);
    this.state = {
      visible: false
    };
  }

  onShowClick() {
    this.setState((prevState) => {
      return { visible: !prevState.visible }
    });
  }
  render() {

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onShowClick}>
          {this.state.visible ? 'Hide details' : 'show details'}
        </button>
        {(this.state.visible) && (
          <div>
            <p>Hey, These are some details now you can see!!</p>
          </div>)}
      </div>
    )
  }
}
ReactDOM.render(<Visibility />, document.getElementById('app'))













// console.log('build-it-visible in progress...');


// const temp = {
//   title: 'Visibility Toggle',
// }

// const appRoot = document.getElementById('app');

// let visibility = false;
// const onShowClick = () => {
//   visibility = !visibility;
//   render();
// }


// const render = () => {
//   const template = (
//     <div>
//       <h1>{temp.title}</h1>

//       <button onClick={onShowClick}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {(visibility) && (<div><p>Hey, These are some details now you can see!!</p></div>)}
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
// render()