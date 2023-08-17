import { FaTrashAlt } from 'react-icons/fa';

function TodoListContent({
  listData,
  completedList,
  activeList,
  setActiveList,
  setCompletedList,
}) {
  return (
    <ul>
      {listData.map((list, index) => {
        return (
          <li
            className='flex justify-between items-center mt-3pxr first:mt-0pxr'
            key={index}
          >
            <div>
              <input
                type='checkbox'
                id={index}
                checked={completedList.includes(list)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setActiveList(activeList.filter((item) => item !== list));
                    setCompletedList([...completedList, list]);
                    localStorage['data'] = JSON.stringify({
                      ...JSON.parse(localStorage['data']),
                      todoList: {
                        active: activeList.filter((item) => item !== list),
                        completed: [...completedList, list],
                      },
                    });
                  } else {
                    setCompletedList(
                      completedList.filter((item) => item !== list)
                    );
                    setActiveList([...activeList, list]);
                  }
                }}
              />
              <label
                className='ms-5pxr font-semibold select-none'
                style={
                  completedList.includes(list)
                    ? { color: '#ccc', textDecoration: 'line-through' }
                    : null
                }
                htmlFor={index}
              >
                {list}
              </label>
            </div>
            <button
              className='flex justify-center items-center w-20pxr h-20pxr bg-gray-300 rounded-full'
              onClick={() => {
                if (activeList.includes(list)) {
                  setActiveList(activeList.filter((item) => item !== list));
                }
                if (completedList.includes(list)) {
                  setCompletedList(
                    completedList.filter((item) => item !== list)
                  );
                }
              }}
            >
              <FaTrashAlt
                size={12}
                color='#000'
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoListContent;
