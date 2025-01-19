import TypeText from './TypeText/TypeText.js';
import Container from './Container/Container'
import Glyph from './Glyph/Glyph.js'
import Plus100Logo from './Plus100Logo/Plus100Logo.js'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  return (
    <>
      <Container>
        <div className="vertical-centered drop-shadow">
            <div className="pill">
              <div className="name">Jeff Cardinal</div>
              <TypeText text="Software Engineer, Artist, Musician" />
            </div>
            <div className="flex-container">

              <Glyph id="g1" link="https://github.com/jeffcardinal">
                <FontAwesomeIcon icon={faGithub} color="#fff" />
              </Glyph>

              <Glyph id="g2" link="https://twitter.com/vaperror">
                <FontAwesomeIcon icon={faTwitter} color="#fff" />
              </Glyph>

              <Glyph id="g3" link="https://www.instagram.com/vaperror/">
                <FontAwesomeIcon icon={faInstagram} color="#fff" />
              </Glyph>

              <Plus100Logo link="https://plus100.bandcamp.com/"/>
            </div>
        </div>
      </Container>
    </>
  );
}
