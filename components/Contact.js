

class Contact extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  };

  handleClick(event) {
    this.props.removeContact(this.props.item.id)
  }

  handleEdit(event) {
    this.props.editContact(this.props.item.id)
  }

  render() {
    return (
    <div className={'contactItem'}>
      <div className={'contactImage'}>
        <img className={'contactImage_avatar'} src={'./components/contact.png'}/>
      </div>
      <div className={'contactData'}>
        <p className={'contactLabel'}>
        Nombre:
        <span>  </span>
        <span className={'contactLabel_span'}>
             {this.props.item.firstName}
          </span>
        </p>
        <p className={'contactLabel'}>
        Primer apellido:
        <span>  </span>
        <span className={'contactLabel_span'}>
             {this.props.item.lastName}
          </span>
        </p>
        <p className={'contactLabel'}>
        Segundo apellido:
        <span>  </span>
        <span className={'contactLabel_span'}>
             {this.props.item.secondLastName}
          </span>
        </p>
        <p className={'contactLabel'}>
        Teléfono móvil:
        <span>  </span>
        <span className={'contactLabel_span'}>
             {this.props.item.mobile}
          </span>
        </p>
        <p className={'contactEmail'}>
        Correo:
        <span>  </span>
        <a className={'contactEmail_link'} href={'mailto:' + this.props.item.email}>
           {this.props.item.email}
          </a>
        </p>
      </div>
      <div className={'contactButton'}>
        <button className={'contactButton_button'} onClick={this.handleClick}>x</button>
        <button className={'contactButton_button_edit'} onClick={this.handleEdit}>Editar</button>
      </div>
    </div>
    );
  }
}
