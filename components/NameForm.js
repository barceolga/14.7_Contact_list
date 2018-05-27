class ContactForm extends React.Component{
  constructor(contact) {
    super(contact);
    this.state = {
      firstName: '',
      lastName: '',
      secondLastName: '',
      eMail: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'text';
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  handleSubmit(event) {
      return (
        <div className={'app'}>
          <ContactForm contact = {contactForm}></ContactForm>
          <Contacts items = {contacts}>
            <Contact item = {this.contact}></Contact>
          </Contacts>
        </div>
      );
    event.preventDefault();
  }

  render() {

  return (
      <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Nombre"/>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Primer apellido"/>
          <input type="text" name="secondLastName" value={this.state.secondLastName} onChange={this.handleInputChange} placeholder="Segundo apellido" />
          <input type="text" name="eMail" value={this.state.eMail} onChange={this.handleInputChange} placeholder="Correo electrónico"/>
        <input className={'submit'} type="submit" value= "Añadir contacto" />
      </form>
    );
  }
}
