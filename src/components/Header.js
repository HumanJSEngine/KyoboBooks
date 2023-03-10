import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './Elements/ThemeToggle';
import { useTheme } from 'styled-components';

const logoSize = { width: 330, height: 180, border: 0 };
const imgSize = { width: 40, height: 40, border: 0, margin: 15 };

const Header = () => {
    return (
        <div className='flex text-center mt-5'>
            <NavLink to='/'>
                <div className='navbar-brand'>
                    <img
                        src='/photos/img_logo_kyobo.png'
                        className='img-logo'
                        alt='logo'
                        style={logoSize}
                    />
                </div>
            </NavLink>
            <Right>
                <Link to='/LogIn'>
                    <img
                        src='/photos/btn_header_cart.png'
                        className='img-cart'
                        alt='cart'
                        style={imgSize}
                    />
                </Link>
                <Link to='/LogIn'>
                    <img
                        src='/photos/btn_header_my.png'
                        className='img-my'
                        alt='cart'
                        style={imgSize}
                    />
                </Link>
            </Right>
            <Nav>
                <NavLink
                    className={({ isActive }) => {
                        return isActive
                            ? 'btn menu btn-dark'
                            : 'btn menu btn-success';
                    }}
                    to='/booklist'
                >
                    To BookList
                </NavLink>
            </Nav>

        </div>
    );
};

const Right = styled.div`
    position: absolute;
    right: 291px;
    top: 170px;
    > .img-cart {
        cursor: pointer;
    }
    > .img-my {
        cursor: pointer;
    }
`;

const Nav = styled.div`
    position: absolute;
    right: 305px;
    top: 137px;
`;

export default Header;
