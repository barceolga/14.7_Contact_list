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
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    onClick(event){
      this.setState({
        clicked: true
      });
    }

  handleSubmit(event) {

     this.props.addToContacts({
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       secondLastName: this.state.secondLastName,
       mobile: this.state.mobile,
       email: this.state.email,
       id: (new Date().getTime()),
     });
      event.preventDefault();
  }

  handleEdit(event) {
    if(!this.state.id) {
      return
    }
      event.preventDefault();
     this.props.changeContact({
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       secondLastName: this.state.secondLastName,
       mobile: this.state.mobile,
       email: this.state.email,
       id: this.state.id
     });
  }

  switchToAddMode(event){
    this.setState({
      firstName: '',
      lastName: '',
      secondLastName: '',
      email: '',
      id: ''
    })
    event.preventDefault();
  }

componentWillReceiveProps(nextProps) {
  this.setState({
    ...nextProps.editContact
  });
}

  render() {

  return (
      <form className={'contactForm'} onSubmit={this.handleSubmit}>
        <div className={'contactForm_container'}>
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
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
                placeholder="Teléfono móvil"
            />
            <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Correo electrónico"
            />
            <input
                ref = "addContact"
                className={'submit'}
                type="submit"
                value= "Añadir contacto" />
            <button
              className={'submit'}
              onClick={this.switchToAddMode.bind(this)}
              > Reiniciar </button>
              <button
                className={'submit'}
                onClick={this.handleEdit.bind(this)}
                > Editar contacto </button>
          </div>
      </form>
    );
  }
}
