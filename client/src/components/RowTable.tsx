import styles from "./UserTable.module.css";
import { RoleTableProps } from "../helpers/types";
import clsx from "clsx";
import RoleRow from "./RoleRow";

const RowTable = ({ roleInfo }: RoleTableProps) => {
  const { data: roles } = roleInfo;

  return (
    <>
      <tbody>
        {roles.map((role) => (
          <RoleRow key={role.id} role={role} />
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

export default RowTable;
