import React from 'react';

const Eheader = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  let username = 'Admin';
  if (props.data) {
    if (props.data.name) {
      username = props.data.name;
    } else if (props.data.firstName) {
      username = props.data.firstName;
    }
  }

  return (
    <div className='flex items-center justify-between bg-[#2C2C2C] text-white p-6 rounded-xl shadow-lg mb-6 transition duration-300'>
      <div>
        <h1 className='text-xl sm:text-2xl font-medium'>
          Hello,
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold mt-1 text-green-400 tracking-wide animate-pulse'>
          {username} 👋
        </h2>
      </div>

      <button
        onClick={logOutUser}
        className='bg-gradient-to-r from-red-600 to-red-800 hover:from-green-600 hover:to-green-800 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition-all duration-300'
      >
        Logout 🚪
      </button>
    </div>
  );
};

export default Eheader;
