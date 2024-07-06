import { Component } from 'react';
import "./index.css";
import Logo from '../Logo';
import Search from '../Search';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Logo />
        <Search />
      </div>
    );
  }
}

export default Header;
