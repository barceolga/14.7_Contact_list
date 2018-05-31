
class Contacts extends React.Component {

      getContacts() {
        return this.props.contacts.map(item => {
         return <Contact item={item} key={item.id} />

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
