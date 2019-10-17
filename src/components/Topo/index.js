import React from 'react';
import { ContainerTop, Social, Contatos, Items } from './estilo';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaAngleDown } from 'react-icons/fa';

function Topbar() {
  return (
    <ContainerTop>
      <Items>
        <Contatos>
          <section>
            <FaMapMarkerAlt size={16} color="#2a9eea" />
            <span>15 Hamstoon Street, West</span>
          </section>
          <section>
          <FaPhone size={16} color="#2a9eea" />
            <span>+88 289 9282 4344</span>
          </section>
          <section>
          <FaEnvelope size={16} color="#2a9eea" />
            <span>support@gmail.com</span>
          </section>
        </Contatos>
        <Social>
          <FaFacebookF size={16} />
          <FaTwitter size={16} />
          <FaLinkedinIn size={16} />
          <section className="idioma">
            <img alt="bandeira" src="https://image.flaticon.com/icons/png/128/330/330459.png"/>
            <span>English</span>
            <FaAngleDown/>
          </section>
        </Social>
      </Items>
    </ContainerTop>
  );
}

export default Topbar;
