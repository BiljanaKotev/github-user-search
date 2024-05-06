import React from 'react';
import UserStats from './UserStats';
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <section className='m-7 lg:m-20'>
      <div className='hidden lg:display lg:flex shrink items-start justify-between bg-[var(--secondary-bg)] p-12 rounded-md'>
        <img className='github-profile-img rounded-full w-28 max-w-full object-contain' src='src/assets/github-profile-pic-placeholder.jpg' alt='github user profile pic' />
        <div className='pl-5'>
          <h2 className='font-bold mb-2 text-lg'>BiljanaKotev</h2>
          <h3 className='mb-2 text-sm text-[var(--accent-light-mode)]'>@BiljanaKotev</h3>
          <p className='bg-[var(--secondary-bg)] text-sm text-[var(--tertiary-light-mode)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem corrupti doloribus repellendus, architecto neque sequi alias voluptate, velit, aspernatur eaque
            illum et? Omnis, nostrum!
          </p>
        </div>
        <div></div>
        <h4 className='absolute right-0 userinfo-date text-sm text-[var(--tertiary-light-mode)]'>Joined 25 Jun 2011</h4>
      </div>

      {/* mobile layout */}
      <section className='lg:max-2xl:hidden'>
        <div className='flex bg-[var(--secondary-bg)] gap-5 p-8'>
          <div>
            <img className='w-20 rounded-full object-contain' src='src/assets/github-profile-pic-placeholder.jpg' alt='github user profile pic' />
          </div>
          <div>
            <h2 className='font-bold mb-2 text-lg'>BiljanaKotev</h2>
            <h3 className='mb-2 text-sm text-[var(--accent-light-mode)]'>@BiljanaKotev</h3>
            <p className='bg-[var(--secondary-bg)] text-sm text-[var(--tertiary-light-mode)]'></p>
            <h4 className='text-sm text-[var(--tertiary-light-mode)]'>Joined 25 Jun 2011</h4>
          </div>
        </div>

        <p className='bg-[var(--secondary-bg)] text-sm text-[var(--tertiary-light-mode)] px-8 pb-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae molestias distinctio blanditiis, rem aspernatur.
        </p>
      </section>

      <UserStats />
      <UserDetails />
    </section>
  );
}

export default UserInfo;
