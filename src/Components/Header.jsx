import React from 'react';
import UserInfo from './UserInfo';

function Header() {
  return (
    <div className='lg:w-8/12 mt-0 mb-0 mx-auto'>
      <header className='m-7 lg:m-20'>
        <div className='flex justify-between  '>
          <h1 className='text-xl font-bold'>devfinder</h1>
          <div className='flex'>
            <span className='mr-3 text-xs font-bold'>DARK</span>
            <button>
              <img src='src/assets/icon-moon.svg' alt='moon icon' />
            </button>
          </div>
        </div>
        <form action=''>
          <div className='flex justify-between items-center bg-[var(--secondary-bg)] mt-4 h-16 p-5 rounded-md'>
            <img className='w-6 object-contain' src='src/assets/icon-search.svg ' alt='magnifying glass search icon' />
            <button className='search-btn text-sm text-bold rounded-md'>Search</button>
          </div>
        </form>
      </header>
      <UserInfo />
    </div>
  );
}

export default Header;
