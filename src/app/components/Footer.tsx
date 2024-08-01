import React from 'react'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className='text-center'>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block m-2 text-lg hover:text-teal-400">
        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block m-2 text-lg hover:text-teal-400">
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block m-2 text-lg hover:text-teal-400">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
      </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="inline-block m-2 text-lg hover:text-teal-400">
        <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
      </a>
    </div>
  )
}
