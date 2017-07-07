import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button'
                            className='navbar-toggle collapsed'
                            data-toggle='collapse'
                            data-target='#navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'/>
                        <span className='icon-bar' />
                        <span className='icon-bar' />
                    </button>
                    <Link to='/' className='navbar-brand'>
                        <span
                            ref='triangles'
                            className={'triangles animated ' + this.props.animationClass}>
                            <div className='tri invert' />
                            <div className='tri invert' />
                            <div className='tri' />
                            <div className='tri invert' />
                            <div className='tri invert' />
                            <div className='tri' />
                            <div className='tri invert' />
                            <div className='tri' />
                            <div className='tri invert' />
                        </span>
                        Showdown
                    </Link>
                    <Link to='/topten' className='navbar-brand'>
                        Hall of Fame(Top 10)
                    </Link>
					<Link to='/login' className='navbar-brand'>
                       Login
                    </Link>
					<Link to='/register' className='navbar-brand'>
                       Register
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to="/combatant/add">Add Combatant</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}