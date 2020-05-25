import React, { useEffect } from "react";
import { connect } from "react-redux";
import User from "../../components/presentational/User/user";
import { fetchUsers } from "../../actions";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const [usersData] = users;
  return (
    <>
      <h1>Here's a list of users.</h1>
      {usersData?.map(({ id, name }) => {
        return <User key={id} name={name}></User>;
      })}
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export const loadData = (store) => store.dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};
