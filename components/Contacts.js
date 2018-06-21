
class Contacts extends React.Component {

      getContacts() {
        return this.props.contacts.map(item => {
         return <Contact item={item} key={item.id} removeContact={this.props.removeContact} editContact={this.props.editContact} changeContact={this.props.changeContact}/>

       });
   }
    render() {
      return (
        <ul className={'contactsList'}>
          {this.getContacts()}
        </ul>
      )
    }
  }
