import { useQuery } from "@tanstack/react-query";
import { fetchRoles } from "../helpers/fetches";
import styles from "./UserTable.module.css";
import RowTable from "./RowTable";

const ManageRoles = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: fetchRoles,
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
    return <>There were no roles found</>;
  }

  return (
    <table>
      <thead>
        <tr className={styles.tableHeaders}>
          <th scope="col">Role</th>
          <th scope="col">Date Created</th>
          <th scope="col" colSpan={2}>
            Description
          </th>
        </tr>
      </thead>
      <RowTable roleInfo={data} />
    </table>
  );
};

export default ManageRoles;
