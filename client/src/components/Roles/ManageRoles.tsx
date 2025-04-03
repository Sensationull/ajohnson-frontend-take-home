import { useQuery } from "@tanstack/react-query";
import { fetchRoles } from "../../helpers/APIRequests";
import styles from "../Table/Table.module.css";
import EntryAnimationWrapper from "../Wrappers/EntryAnimationWrapper";
import RowTableBody from "./RowTableBody";

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
    <EntryAnimationWrapper>
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
        <RowTableBody roleInfo={data} />
      </table>
    </EntryAnimationWrapper>
  );
};

export default ManageRoles;
