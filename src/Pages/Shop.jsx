import React, { useEffect } from 'react';

function Shop() {
  useEffect(() => {
    window.open('https://wpbingosite.com/wordpress/jumys/shop/', '_blank');
  }, []);

  return (
    <div>
      <h1 className='bg-[#eeeb40] text-center text-6xl font-semibold text-white h-screen items-center'>
        This is a Shop Page
      </h1>
    </div>
  );
}

export default Shop;
