import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.nav`
  align-items: center;
  background-color: blue;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  margin-left: 2rem;
  padding-top: 78px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const IconContainer = styled.div`
  cursor: pointer;
  margin-right: 2rem;
  text-align: right;
  width: 100%;
`;

const MenuContainer = styled.ul`
  background-color: blue;
  color: white;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 185px;
  text-align: right;
  top: 100%;
  width: 70px;

  margin-right: 300px;

  li {
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Nav = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <a href="/">
        <h2>bakery</h2>
      </a>

      <MenuContainer isOpen={isOpen}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about-us">about</a>
        </li>
      </MenuContainer>
    </Container>
  );
};

export default Nav;
