import TodoListContent from './TodoListContent';

function TodoList({
  active,
  activeList,
  setActiveList,
  completedList,
  setCompletedList,
}) {
  if (active === 0) {
    return (
      <TodoListContent
        listData={[...activeList, ...completedList]}
        activeList={activeList}
        completedList={completedList}
        setActiveList={setActiveList}
        setCompletedList={setCompletedList}
      />
    );
  }
  if (active === 1) {
    return (
      <TodoListContent
        listData={activeList}
        activeList={activeList}
        completedList={completedList}
        setActiveList={setActiveList}
        setCompletedList={setCompletedList}
      />
    );
  }
  if (active === 2) {
    return (
      <TodoListContent
        listData={completedList}
        activeList={activeList}
        completedList={completedList}
        setActiveList={setActiveList}
        setCompletedList={setCompletedList}
      />
    );
  }
}

export default TodoList;
