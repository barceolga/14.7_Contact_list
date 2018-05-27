/*var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: './components/contact.png'
        }),
          React.createElement('p', {className: 'contactLabel'}, 'Nombre ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.firstName)),
          React.createElement('p', {className: 'contactLabel'}, 'Primer apellido ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.lastName)),
          React.createElement('p', {className: 'contactLabel'}, 'Segundo apellido ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.secondLastName)),
          React.createElement('p', {className: 'contactEmail'}, 'Correo ',
            React.createElement('a', {className: 'contactEmail_link', href: 'mailto:' + this.props.item.email}, this.props.item.email)
        )
      )
    )
  },
});*/

class Contact extends React.Component {
  constructor(item) {
    super(item);
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
    </div>
    );
  }
}
