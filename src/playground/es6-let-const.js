
console.log('name', name)

const name = 'Andrew Mead';

// const firstName = (name) => name.split(' ')[0]
const firstName = (name) => {
  return name.split(' ')[0]
}
console.log(firstName(name))

const multifun = {
  list: [2, 3, 4, 5, 6, 7],
  num: 4,
  res() {
    return this.list.map((n) => this.num * n)
  }
}
console.log(multifun.res())