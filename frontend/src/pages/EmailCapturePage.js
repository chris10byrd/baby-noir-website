import React, { Component } from 'react';

import Logo from '../res/logos/logo1x.png';
import TransparentLogo from '../res/logos/logo-transparent1x.png';
import InstagramLogo from '@material-ui/icons/Instagram';
import FacebookLogo from '@material-ui/icons/Facebook';
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

class emailCapture extends Component {
    render() {
        return (
            <div className='email-container'>
                <div className="cover">
                    <img src={TransparentLogo} alt="Baby Noir Logo" className='transparent-logo' />
                    <caption className='cover-caption'>Premier Baby Clothing</caption>
                </div>
                <form name="email-form" className="email-form" method="POST">
                    <input type="hidden" name="form-name" value="email-form" />
                    <img src={Logo} alt="logo" className='logo' />
                    <h1 className="title">Baby Noir Clothing</h1>
                    <h2 className="subtitle">Don't miss the latest updates!</h2>
                    <label htmlFor="first-name">First Name</label>
                    <input type="name" name="first-name" id="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="name" name="last-name" id="last-name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <input type="submit" value="SUBMIT" />
                    <div className="social-media-links">
                        <a href="https://www.instagram.com/" ><InstagramLogo className='social-media-icon' /></a>
                        <a href="https://www.facebook.com/" ><FacebookLogo className='social-media-icon' /></a>
                    </div>
                </form>
            </div>
        );
    }
}

export default emailCapture;