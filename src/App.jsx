import { useState, useEffect } from 'react';
import './App.css';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import Nav from './components/Nav';
import TodoList from './components/TodoList';

function App() {
  const [active, setActive] = useState(0);
  const [navMenu, setNavMenu] = useState([]);
  const [input, setInput] = useState('');
  const [activeList, setActiveList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const inputData = (input) => {
    if (input === '') return;
    setActiveList([...activeList, input]);
    setInput('');
  };

  useEffect(() => {
    fetch('/data.json').then((res) => {
      res.json().then((data) => {
        localStorage['data'] = JSON.stringify(data);
        const result = JSON.parse(localStorage['data']);

        setNavMenu(result['navMenu']);

        setActiveList(result['todoList']['active']);
        setCompletedList(result['todoList']['completed']);
      });
    });
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-screen h-screen bg-gray-500 ${
        isDark ? 'dark' : ''
      }`}
    >
      <div className='w-300pxr drop-shadow-xl'>
        <div className='flex justify-between items-center h-50pxr px-10pxr bg-gray-100 dark:bg-gray-700 rounded-t-lg'>
          <button
            className='flex items-center text-white'
            onClick={() => {
              setIsDark(!isDark);
              console.log(isDark);
            }}
          >
            {isDark ? <HiSun size={22} /> : <BsFillMoonFill color='orange' />}
          </button>
          <nav>
            <Nav
              navMenu={navMenu}
              setNavMenu={setNavMenu}
              active={active}
              setActive={setActive}
            />
          </nav>
        </div>
        <div className='h-300pxr px-15pxr py-15pxr text-gray-700 dark:text-white bg-white dark:bg-gray-600'>
          <TodoList
            active={active}
            activeList={activeList}
            setActiveList={setActiveList}
            completedList={completedList}
            setCompletedList={setCompletedList}
          />
        </div>
        <div className='flex items-center h-60pxr px-10pxr bg-gray-100 dark:bg-gray-700 rounded-b-lg'>
          <div className='grid grid-cols-5 w-full h-32pxr'>
            <input
              type='text'
              className='col-span-4 h-full rounded-l placeholder:ps-10pxr'
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              placeholder='Add Todo'
            />
            <button
              className='col-span-1 h-full text-white text-center font-bold capitalize bg-orange-400 rounded-r'
              onClick={() => {
                inputData(input);
              }}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
