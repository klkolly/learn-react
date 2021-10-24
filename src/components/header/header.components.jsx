import React from 'react';
import {Link} from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const Header = ({currentUser}) => {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
               <Link className='option' to='/shop'>
                   shop
               </Link>
               <Link className='option' to='/shop'>
                   contact
               </Link>
               {
                   currentUser?
                   (<div className='option' 
                        onClick={()=>{
                            signOut(auth)}
                        }>
                        sign out
                    </div>):
                   (<Link className='option' to='/loginin'> sign in</Link>)
               }
            </div>
        </div>
    )
}
export default Header;