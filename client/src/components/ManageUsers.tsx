import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable";
import { fetchUsers } from "../helpers/fetches";
import styles from "./UserTable.module.css";
import { ManageUsersProps } from "../helpers/types";
import EntryAnimationWrapper from "./EntryAnimationWrapper";

const ManageUsers = ({ searchTerm }: ManageUsersProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users", searchTerm],
    queryFn: () => fetchUsers(searchTerm),
  });

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data.data.length === 0) {
    return <>There were no users found</>;
  }

  return (
    <EntryAnimationWrapper>
      <table>
        <thead>
          <tr className={styles.tableHeaders}>
            <th scope="col">User</th>
            <th scope="col">Role</th>
            <th scope="col" colSpan={2}>
              Date Joined
            </th>
          </tr>
        </thead>
        <UserTable userInfo={data} />
      </table>
    </EntryAnimationWrapper>
  );
};

export default ManageUsers;
