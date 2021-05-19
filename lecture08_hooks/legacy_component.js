class Welcome extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           apple: 3,
           banana: 4,
       };
    }
    componentDidMount() {
        // ...
    }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  