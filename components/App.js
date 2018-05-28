
/*var contacts = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'López',
    secondLastName: 'Carrillo',
    email: 'juan.lopezcarrillo@example.com',
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Delgado',
    secondLastName: 'Pérez',
    email: 'maria.delgadoperez@example.com',
  },
  {
    id: 3,
    firstName: 'Iker',
    lastName: 'Mendietta',
    secondLastName: 'Piñeiro',
    email: 'iker.mendiettapineiro@example.com',
  }
];
*/
var contactForm = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  email: ''
}


class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      contacts: [],
    };
  }

  addToContacts(newContact) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        newContact
      ],
    });
  }
  render() {
    return (
      <div className={app}>
         <ContactForm addToContacts={this.addToContacts.bind(this)}/>
         <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
