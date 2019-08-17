import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <Phone />
      </div>
    );
  }
}

class Phone extends React.Component{
  
  constructor() {
    super();
    this.state = {
      isActive: false    
    }
  }
  
  generateSidebarContent() {
    if (!this.state.isActive) {
      return null;
    }
    return (
      <div className='sidebar__content-container'>
        <div className='sidebar__circle'>
        </div>
      </div>
    )
  }
  
  generateSidebar() {
    const isActive = this.state.isActive ? 'active' : '';
    return (
      <div className={`sidebar ${isActive}`}>
        {this.generateSidebarContent()}
      </div>
    )
  }
  
  render() {
    const fontAwesomeClass = this.state.isActive ? 'chevron-left' : 'bars';
    return (
      <div className='phone'>
        <div className='phone__header'>
          <span 
            className={`fa fa-${fontAwesomeClass}`} 
            onClick={() => this.setState({isActive: !this.state.isActive})}
          />
          <h3>Dope App</h3>
          <span className='fa fa-search' />
        </div>
        <div className='phone-content__wrapper'>
          {this.generateSidebar()}
          <PhoneContent color='green'/>
          <PhoneContent color='blue'  />
          <PhoneContent color='yellow' /> 
          <PhoneContent color='red' /> 
        </div>
        <Help />
      </div>
    );
  }
}

class PhoneContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      isActive: false    
    }
  }
  
  generateInnerContent() {
    if (!this.state.isActive) {
      return null;
    }
    return (
      <div className='inner-content'>
        <div className='inner-content__square'>
        </div>
      </div>
    )
    
  }
  
  render() {
    const className = this.state.isActive ? 'active' : '';
    return (
      <div 
          className={`phone-content ${className}`}
          onClick={() => this.setState({isActive: !this.state.isActive})}
        >
        <div className={`phone-content__hero ${this.props.color}`}>
        </div>
        <div className='phone-content__footer'>
          <div className='phone-content__circle'></div>
          <div className='phone-content__line-wrapper'>
            <div className='phone-content__line'></div>
            <div className='phone-content__line phone-content__line--two'></div>
          </div>
        </div>
        {this.generateInnerContent()}
      </div>
    );
  }
}

class Help extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isActive: false
    }
  }
  render() {
    const helpClass = this.state.isActive ? 'active' : '';
    return (
      <div className='help-wrapper'>
        <div className={`help help--small${helpClass} help--small-1`}>
          <a 
            href='https://twitter.com/McGreenBeats' 
            target="_blank"
          >
            <span className={`fa fa-twitter`}/>
          </a>
        </div>
        <div className={`help help--small${helpClass} help--small-2`}>
          <a 
            href='https://mattgreenberg.co' 
            target="_blank"
          >
            <span className={`fa fa-user`}/>
          </a>
        </div>
        <div className={`help help--small${helpClass} help--small-3`}>
          <a 
            href='https://codepen.io/mattgreenberg/' 
            target="_blank"
          >
           <span className={`fa fa-codepen`}/>
          </a>
        </div>
        <div 
          className='help'
          onClick={() => this.setState({isActive: !this.state.isActive})}
        >
          <span className={`fa fa-plus ${helpClass}`}/>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));