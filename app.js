const formatLocation = location => {
  return location.toUpperCase();
}

const location = "nyc"


class Heading extends React.Component {
  constructor (props){
    super(props)
    this.professLove = this.professLove.bind(this);
  }

  professLove(){
    console.log("I love",this.props.drink);
  }
  render(){
    return(
      <div className="container">
        <h1 className="shop-name">React Roasts Coffee Shop {formatLocation(location)}</h1>
        <ul>
          <li onClick={this.professLove}>{this.props.drink} <span>{this.props.price}</span></li>
        </ul>
      </div>
    )
  }
}


ReactDOM.render(
  <section>
    <Heading
      drink="espresso"
      price="$8.00"
    ></Heading>
  </section>,
  document.querySelector('main')
);
