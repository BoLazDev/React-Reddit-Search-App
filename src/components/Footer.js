import React from 'react';

function Footer() {
  return (
    <>
      <footer id='footer' className='py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center mb-0 text-white'>&copy; Reddit search app { new Date().getFullYear() }; All rights are reserved.</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
