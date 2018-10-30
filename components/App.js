
var contacts = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'López',
    secondLastName: 'Carrillo',
    mobile: '0034 678 111 222',
    email: 'juan.lopezcarrillo@example.com'
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Delgado',
    secondLastName: 'Pérez',
    mobile: '0034 678 111 223',
    email: 'maria.delgadoperez@example.com'
  },
  {
    id: 3,
    firstName: 'Iker',
    lastName: 'Mendietta',
    secondLastName: 'Piñeiro',
    mobile: '0034 678 111 224',
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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  addToContacts(newContact) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        newContact
      ],
    });
  }

  removeContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id)
    })
  }

  removeAllContacts() {
    this.setState({
      contacts: []
    });
  }

  handleOnClick() {
    this.removeAllContacts();
  }

  editContact(id){
    const editContact = this.state.contacts.find(item=>item.id===id);
    this.setState({
      editContact: editContact
    })
  }


  changeContact(contact) {
    let filteredContact = this.state.contacts.filter(item=>item.id!==contact.id);
    let changeContact = {...contact};
    let filterContact = [...filteredContact, changeContact];
    this.setState({
      contacts: filterContact
    });
  }
  render() {
    return (
      <div className={'app'}>
        <div className={'app_form'}>
             <ContactForm
             addToContacts={this.addToContacts.bind(this)}
             editContact={this.state.editContact}
             changeContact={this.changeContact.bind(this)}/>
             <div className={'app_title'}>
              <div>
                <img src ="images/Contact_logo.png"/>
                <h1>Lista de contactos</h1>
              </div>
               <button onClick={this.handleOnClick}>Borrar lista</button>
             </div>
        </div>
        <div className={'app_list'}>
         <Contacts contacts={this.state.contacts} removeContact={this.removeContact.bind(this)} editContact={this.editContact.bind(this)} changeContact={this.changeContact.bind(this)} />
         </div>
      </div>
    );
  }
}
