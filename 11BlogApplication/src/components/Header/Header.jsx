/* 
Ithe aapn kay kay kela 

header design kela eka veglya styla madhe 
Ithe aapn ek array of objects banavnar and then based on authentication status kahi fields tyala show karnar and kahi fields tyala show nahi karnar

additionally we will make use of useNavigate hook for routing between different pages

*/
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import {Container,Logo,LogoutBtn} from '../index';

function Header() {
  // Jr authStatus true asel tr kahi goshti show karnar 
  // and jr authStatus false asel tr kahi goshti show honar

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active: !authStatus
    },
    {
      name:'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-posts',
      active: authStatus
    }
  ]

  return (
    <header className='py-3 shadow bg-red-900 font-semibold text-white'>
      <Container>
        <nav className='flex'>
          {/* Saglyat pahila logo lavooyat */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Ithe Aapn ek unordered list banavnar- Observe the syntax here */}
          <ul className='flex ml-auto'>
            {/* Jo element repeat hoat ahe tyala apn key dyaychi */}
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-slate-200 hover:text-black rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {authStatus && (
              <li><LogoutBtn /></li>
            )}
          </ul>
        </nav>
      </Container>

    </header>
  )
}

export default Header