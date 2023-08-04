import type React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import Pagination from "./Pagination";
import LoadingCircle from "./LoadingCircle";

const UserList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodosPage, fetchUsers } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
    fetchUsers();
  }, [limit, page]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePrevPage = () => {
    if (page === 1) return;
    setTodosPage(page - 1);
  };

  // hardcoded constant as it's hard limit of API that cannot be fetched from the server
  const PAGE_LIMIT = 20;

  const handleNextPage = () => {
    if (page > PAGE_LIMIT) return;
    setTodosPage(page + 1);
  };

  const handleSpecificPage = (page: number) => {
    if (page < 1 && page > PAGE_LIMIT) return;
    setTodosPage(page);
  };

  if (loading) {
    return <LoadingCircle />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="flex flex-col flex-wrap content-center w-full">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-gray-300 border-2 m-2 py-1.5 px-4 rounded-xl text-center w-fit mx-auto"
        >
          {todo.id} - {todo.title}
        </div>
      ))}
      <Pagination
        totalPages={PAGE_LIMIT}
        currentPage={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onSpecificPage={handleSpecificPage}
      />
    </div>
  );
};

export default UserList;
