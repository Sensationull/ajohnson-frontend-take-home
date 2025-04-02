import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable";
import { fetchUsers } from "../helpers/fetches";
import styles from "./UserTable.module.css";
import { ManageUsersProps } from "../helpers/types";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const ManageUsers = ({ searchTerm }: ManageUsersProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users", searchTerm],
    queryFn: () => fetchUsers(searchTerm),
  });

  if (isLoading) {
    return (
      <>
        <AnimatePresence mode="wait">
          <motion.div
            key={"loading"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Loading...
          </motion.div>
        </AnimatePresence>
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
    <AnimatePresence mode="wait">
      <motion.div
        key={"table"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default ManageUsers;
