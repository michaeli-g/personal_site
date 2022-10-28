class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Message...'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      window.open('mailto:michaelianguerrero@gmail.com?subject=Inquiry&body=' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="container-sm">
          <textarea className="container" placeholder={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="btn btn-primary btn-lg" type="submit" value="Send" />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);
