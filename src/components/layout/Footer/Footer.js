import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const informationItems = ['About us', 'Policy', 'Conditions', 'Online support'];
  const accountItems = ['Login', 'My cart', 'Wishlist', 'Checkout'];
  const informationSecondItems = [
    'Specials',
    'New products',
    'Best Sellers',
    'Out Stores',
  ];
  const orderItems = [
    'Payment options',
    'Shipping and delivery',
    'Returns',
    'Shipping',
  ];

  const styleSet = {
    topContainer: 'row ' + styles.topContainer,
    bottomContainer: 'row align-items-center ' + styles.bottomContainer,
    copyright: 'col text-center ' + styles.copyright,
    socialMedia: 'col text-right ' + styles.socialMedia,
    colFooterMenuDefault: 'col-6 col-md ',
  };
  return (
    <footer className={styles.root}>
      <div className={styles.footerMenu}>
        <div className='container'>
          <div className={styleSet.topContainer}>
            <div className={styleSet.colFooterMenuDefault}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  {informationItems.map(item => (
                    <li key={item.id}>
                      <a href='#'>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styleSet.colFooterMenuDefault}>
              <div className={styles.menuWrapper}>
                <h6>My account</h6>
                <ul>
                  {accountItems.map(item => (
                    <li key={item.id}>
                      <a href='#'>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styleSet.colFooterMenuDefault}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  {informationSecondItems.map(item => (
                    <li key={item.id}>
                      <a href='#'>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styleSet.colFooterMenuDefault}>
              <div className={styles.menuWrapper}>
                <h6>Orders</h6>
                <ul>
                  {orderItems.map(item => (
                    <li key={item.id}>
                      <a href='#'>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <img src='./images/cards.png' alt='Supported credit cards' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className='container'>
          <div className={styleSet.bottomContainer}>
            <div className={'col ' + styles.content}></div>
            <div className={styleSet.copyright}>
              <p>©Copyright 2016 Bazar | All Rights Reserved</p>
            </div>
            <div className={styleSet.socialMedia}>
              <ul>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
