
var contacts = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'López',
    secondLastName: 'Carrillo',
    mobile: '0034 678 111 222 333',
    email: 'juan.lopezcarrillo@example.com'
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Delgado',
    secondLastName: 'Pérez',
    mobile: '0034 678 111 222 333',
    email: 'maria.delgadoperez@example.com'
  },
  {
    id: 3,
    firstName: 'Iker',
    lastName: 'Mendietta',
    secondLastName: 'Piñeiro',
    mobile: '0034 678 111 222 335',
    email: 'iker.mendiettapineiro@example.com'
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  mobile: '',
  email: ''
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

  removeContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <div className={'app'}>
         <ContactForm addToContacts={this.addToContacts.bind(this)} />
         <Contacts contacts={this.state.contacts} removeContact={this.removeContact.bind(this)}/>
      </div>
    );
  }
}
