console.log('app.js is running... ')

const temp = {
  title: 'Indecision app',
  subtitle: 'Welcome to my app',
  options: ['option one', 'option two']
}

const template = (
  <div>
    <h1>{temp.title}</h1>
    {(temp.subtitle) && <p>{temp.subtitle}</p>}
    <p>{(temp.options.length > 0) ? 'Here are your options' : 'No Options'}</p>

    <ol>
      <li>1</li>
      <li>2</li>
    </ol>


  </div>
)
const user = {
  name: 'Priya',
  age: 7,
  location: 'St.Louis'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const template2 = (
  <div>
    <h1>name :{user.name ? user.name : 'Anonymous'}</h1>
    <p>age :{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p>
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);