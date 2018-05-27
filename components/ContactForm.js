var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nombre',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Primer apellido',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Segundo apellido',
          value: this.props.contact.secondLastName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Correo electrónico',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type:'submit'}, 'Añadir contacto')
      )
    )
  },
})
