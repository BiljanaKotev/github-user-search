import React from 'react';

function UserDetails() {
  return (
    <section className='bg-[var(--secondary-bg)] pb-7 rounded-md p-8'>
      <div className='grid grid-cols-1  gap-4; md:max-2xl:grid-cols-2 '>
        <div className='flex items-center md:max-2xl:justify-center gap-2 mb-5'>
          <img src='src/assets/icon-location.svg' alt='' />
          <h4 className='text-sm'>San Francisco</h4>
        </div>
        <div className='flex items-center md:max-2xl:justify-center gap-2 mb-5'>
          <img src='src/assets/icon-twitter.svg' alt='' />
          <h4 className='text-sm'>Not available</h4>
        </div>
        <div className='flex items-center md:max-2xl:justify-center gap-2 md:max-2xl:pl-12 mb-5'>
          <img src='src/assets/icon-website.svg' alt='' />
          <a className='text-sm' href=''>
            https://github.blog
          </a>
        </div>
        <div className='flex items-center md:max-2xl:justify-center gap-2'>
          <img src='src/assets/icon-company.svg' alt='' />
          <h4 className='text-sm'>Not available</h4>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
