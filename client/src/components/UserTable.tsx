import styles from "./UserTable.module.css";
import { UserTableProps } from "../helpers/types";
import UserRow from "./UserRow";
import clsx from "clsx";

const UserTable = ({ userInfo }: UserTableProps) => {
  const { data: users } = userInfo;

  return (
    <>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
      <tfoot className={styles.tableFooter}>
        <tr>
          <td></td>
          {/* filler to expand column */}
          <td></td>
          <td colSpan={4}>
            <button
              className={clsx(styles.previousButton, {
                [styles.buttonIsDisabled]: true,
              })}
            >
              Previous
            </button>
            <button
              className={clsx(styles.nextButton, {
                [styles.buttonIsActive]: true,
              })}
            >
              Next
            </button>
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default UserTable;
