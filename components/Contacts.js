
class Contacts extends React.Component {

      getContacts() {
        return this.props.contacts.map(({id = 0, firstName = '', lastName= '', secondLastName ='', email =''}) => {
         <li key={id}>
         <div className={'contactItem'}>
               <img className={'contactImage'} src={'./components/contact.png'}/>
               <p className={'contactLabel'}>
               Nombre:
                 <span className={'contactLabel_span'}>
                   {firstName}
                 </span>
               </p>
               <p className={'contactLabel'}>
               Primer apellido:
                 <span className={'contactLabel_span'}>
                   {lastName}
                 </span>
               </p>
               <p className={'contactLabel'}>
               Segundo apellido:
                 <span className={'contactLabel_span'}>
                   {secondLastName}
                 </span>
               </p>
               <p className={'contactEmail'}>
               Correo:
                 <a className={'contactEmail_link'} href={'mailto:' + this.props.item.email}>
                 {email}
                 </a>
               </p>
           </div>
         </li>
       });
   }
    render() {
      return (
        <ul>
          {this.getContacts()}
        </ul>
      )
    }
  }
