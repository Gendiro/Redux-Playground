import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import type {} from "redux-thunk/extend-redux";
import { useActions } from "../hooks/useActions";
import LoadingCircle from "./LoadingCircle";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <LoadingCircle />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div
            className="border-gray-300 border-2 m-2 py-3 px-4 rounded-xl text-center w-fit mx-auto"
            key={user.id}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
