class ContactForm extends React.Component{
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      secondLastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);

      this.setState({
        [name]: value
      });
    }

  handleSubmit(event) {
 this.props.addTolist({
   firstName: this.state.firstName,
   lastName: this.state.lastName,
   secondLastName: this.state.secondLastName,
   email: this.state.email,
   id: (new Date().getTime()),
 });

    event.preventDefault();
  }

  render() {

  return (
      <form className={'contactForm'} onSubmit={this.handleSubmit}>
        <div>
            <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="Nombre"
            />
            <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Primer apellido"
            />
            <input
                type="text"
                name="secondLastName"
                value={this.state.secondLastName}
                onChange={this.handleChange}
                placeholder="Segundo apellido"
            />
            <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Correo electrónico"
            />
            <input
                className={'submit'}
                type="submit"
                value= "Añadir contacto" />
          </div>
      </form>
    );
  }
}
