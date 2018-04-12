# React Roasts Lab

## Set up
- `mkdir react_roasts`
- `cd react_roasts `
- `touch app.js index.html`
- `atom .`

**index.html**
- add html boilerplate
- add script tags
- add a `main` tag inside the `body`

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
<script type="text/babel" src="app.js"></script>
```

**app.js**

- render and `h1` tag using react

```jsx
ReactDOM.render(
  <h1 className="shop-name">React Roasts Coffee Shop</h1>,
  document.querySelector('#container')
);
```

#### Run a simple server:
- If you have python 2.x
  - `python -m SimpleHTTPServer`
  
- If you have python 3.x
  - `python -m http.server [<portNo>]`
    ex:`python -m http.server 8080`
    
- If you want to use npm
    - Install, if you haven't already, with `npm install -g http-server` (might need to run `sudo npm install -g http-server`)
    - run `http-server -o`

Example Appearance:

![React App Started](https://i.imgur.com/xxeZCEW.png)



## Assign JSX to a variable

Let's update our app to store our Store Name in a variable

```jsx
const storeName = <h1 className="shop-name">React Roasts Coffee Shop</h1>
```

And update our ReactDOM.render()

```js
const storeName = <h1 className="shop-name">React Roasts Coffee Shop</h1>

ReactDOM.render(
  storeName,
  document.querySelector('#container')
);
```

It should look the same.

### Embed and Expression

Let's put our store location as a variable

```jsx
const location = "nyc"
const storeName = <h1 className="shop-name">React Roasts Coffee Shop, {location}</h1>
```

### Call a function inside our Expression

```jsx
const formatLocation = location => {
  return location.toUpperCase();
}
```

### Create multi-line JSX variables

wrap your `h1` in a `div` with a class of `container`
add an h2  with a tag line like `Our coffee will get your heart racing`


### Create a custom component

Let's make a heading component. Here is a little code to get you started. We're copy pasting our multi-line jsx into our custom component. We have to add a return statement and wrap our code in `()` because it goes across multiple lines

```jsx
class Heading extends React.Component {
  render(){
    return(
      <div className="container">
        <h1 className="shop-name">React Roasts Coffee Shop {formatLocation(location)}</h1>
      </div>
    )
  }
}
```

Go ahead and add an unordered list with one list item `espresso` under the `h1`

### Customize an instance of a component with properties

Let's get the word `espresso` to render as a property

```html
<section>
    <Heading drink="espresso"></Heading>
</section>,
```

In your heading component, remove the hard coded `espresso` and replace it with `this.props.drink`

```html
<div className="container">
  <h1 className="shop-name">React Roasts Coffee Shop {formatLocation(location)}</h1>
  <ul>
    <li>{this.props.drink}</li>
  </ul>
</div>
```

**Challenge!** Add another property `price` in the ReactDOM.render() and set it to the string `$8.00`, then pass the value to the `Heading` component, inside a `span` inside the `li` element

### Handle User Events

When the user clicks on the espresso li, let's set an alert that says 'I love coffee'

Try looking back at the notes from class to figure this out.

**Challenge, add the function INSIDE the `Heading` component and call it correctly

### Click Event Get Property

Instead of alerting with `I love coffee`, have the alert say `I love` and the name of the coffee

### Hungry for More
Follow the notes and create an array of different coffees. Render them as list items using .map

Include the click event that will show the right coffee when clicked
