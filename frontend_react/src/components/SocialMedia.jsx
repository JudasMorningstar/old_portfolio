import React from 'react';
import { BsInstagram, BsGithub} from 'react-icons/bs';
import { FaFigma} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/JudasMorningstar'>
            <BsGithub />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/_halftoothbandit/'>
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href='https://www.figma.com/@junade'>
            <FaFigma />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia