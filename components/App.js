
var contacts = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'López',
    secondLastName: 'Carrillo',
    email: 'juan.lopezcarrillo@example.com',
    mobile: '0034 678 111 222 333'
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Delgado',
    secondLastName: 'Pérez',
    email: 'maria.delgadoperez@example.com',
      mobile: '0034 678 111 222 334'
  },
  {
    id: 3,
    firstName: 'Iker',
    lastName: 'Mendietta',
    secondLastName: 'Piñeiro',
    email: 'iker.mendiettapineiro@example.com',
      mobile: '0034 678 111 222 335'
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  email: '',
  mobile: ''
}


class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      contacts: contacts,
    };
  }

  addToContacts(newContact) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        newContact
      ],
    }); console.log(this.state);
  }
  render() {
    return (
      <div className={'app'}>
         <ContactForm addToContacts={this.addToContacts.bind(this)}/>
         <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
