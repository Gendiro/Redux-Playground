import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import {useTypedDispatch, useTypedSelector} from "./hooks/redux";
import { navSlice } from "./store/reducers/navReducer";
import PostList from "./components/PostList.tsx";

export default function App() {
  const { setCurrentPage } = navSlice.actions;

  const currentPage = useTypedSelector((store) => store.nav.currentPage);

  const dispatch = useTypedDispatch();

  const handleChangeOption = (new_option: string) => {
    dispatch(setCurrentPage(new_option));
  };

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <h1 className="w-full text-center text-3xl mb-5 pt-4">Redux testing</h1>
      <Navbar
        options={["posts", "todos", "users"]}
        currentOption={currentPage}
        onChangeOption={handleChangeOption}
      />

      {currentPage === "posts" && <PostList />}
      {currentPage === "users" && <UserList />}
      {currentPage === "todos" && <TodoList />}
    </div>
  );
}

