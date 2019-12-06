
console.log('app.js is running... ')

const temp = {
  title: 'Indecision app',
  subtitle: 'Welcome to my app',
  options: []
}


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log(option)
  if (option) {
    temp.options.push(option)
    e.target.elements.option.value = '';
    renderFunction()
  }
};


const removeAll = () => {
  temp.options = []
  renderFunction()
}

const onDecision = () => {
  const randNum = Math.floor(Math.random() * temp.options.length)
  const choice = temp.options[randNum]
  alert(choice)
}
const appRoot = document.getElementById('app')


const renderFunction = () => {
  const template = (
    <div>
      <h1>{temp.title}</h1>
      {(temp.subtitle) && <p>{temp.subtitle}</p>}
      <p>{(temp.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
      <p>length:{temp.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <button disabled={temp.options.length === 0} onClick={onDecision}>What should I do?</button>
      <ol>
        {temp.options.map((n) => <li key={n}>{n}</li>)}
      </ol>


      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderFunction()
