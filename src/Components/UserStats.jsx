import React from 'react';

function UserStats() {
  return (
    <section className='github-stats bg-[var(--secondary-bg)]  pb-12'>
      <div id='stats' className='flex justify-between mx-6 md:max-2xl:w-1/2 md:max-2xl:mt-0 mb-0 md:max-2xl:mx-auto  bg-[var(--primary-bg)] p-5 rounded-md'>
        <div>
          <h4 className='text-xs md:max-2xl:text-sm'>Repos</h4>
          <span className='font-bold'>8</span>
        </div>
        <div>
          <h4 className='text-xs md:max-2xl:text-sm'>Followers</h4>
          <span className='font-bold'>3938</span>
        </div>
        <div>
          <h4 className='text-xs md:max-2xl:text-sm'>Following</h4>
          <span className='font-bold'>9</span>
        </div>
      </div>
    </section>
  );
}

export default UserStats;
