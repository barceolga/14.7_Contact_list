

class Contact extends React.Component {
  constructor(props) {
    super();
  };

  render() {
    return (
    <div className={'contactItem'}>
      <img className={'contactImage'} src={'./components/contact.png'}/>
      <p className={'contactLabel'}>
      Nombre:
      <span className={'contactLabel_span'}>
           {this.props.item.firstName}
        </span>
      </p>
      <p className={'contactLabel'}>
      Primer apellido:
      <span className={'contactLabel_span'}>
           {this.props.item.lastName}
        </span>
      </p>
      <p className={'contactLabel'}>
      Segundo apellido:
      <span className={'contactLabel_span'}>
           {this.props.item.secondLastName}
        </span>
      </p>
      <p className={'contactEmail'}>
      Correo:
      <a className={'contactEmail_link'} href={'mailto:' + this.props.item.email}>
         {this.props.item.email}
        </a>
      </p>
      <p className={'contactLabel'}>
      Teléfono móvil:
      <span className={'contactLabel_span'}>
           {this.props.item.mobile}
        </span>
      </p>
    </div>
    );
  }
}
