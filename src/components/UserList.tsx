import React, { useEffect } from "react";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import LoadingCircle from "./LoadingCircle";
import {fetchUsers} from "../store/action-creators/user.ts";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).then();
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
