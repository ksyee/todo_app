function Nav({ navMenu, active, setActive }) {
  return (
    <ul className='flex text-orange-300 font-bold'>
      {navMenu.map((item, index) => {
        return (
          <li
            className='capitalize ms-10pxr cursor-pointer first:ms-0pxr'
            style={
              active === index
                ? { color: 'orange', borderBottom: '2px solid #fff' }
                : null
            }
            key={index}
            onClick={() => {
              setActive(index);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
