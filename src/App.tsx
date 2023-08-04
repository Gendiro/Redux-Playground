import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

export default function App() {
  const { setCurrentPage } = useActions();

  const currentPage = useTypedSelector((store) => store.nav.currentPage);

  const handleChangeOption = (new_option: string) => {
    setCurrentPage(new_option);
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <h1 className="w-full text-center text-3xl mb-5 pt-4">Redux testing</h1>
      <Navbar
        options={["todos", "users"]}
        currentOption={currentPage}
        onChangeOption={handleChangeOption}
      />

      {currentPage === "users" && <UserList />}
      {currentPage === "todos" && <TodoList />}
    </div>
  );
}

