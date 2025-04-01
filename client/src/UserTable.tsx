import clsx from "clsx";
import AvatarMT from "./components/AvatarMT";
import AvatarLC from "./components/AvatarLC";
import AvatarSJ from "./components/AvatarSJ";
import DotsIcon from "./DotsIcon";

import styles from "./UserTable.module.css";

const UserTable = () => {
  return (
    <table>
      <thead>
        <tr className={styles.tableHeaders}>
          <th scope="col">User</th>
          <th scope="col">Role</th>
          <th scope="col" colSpan={2}>
            Joined
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tableMemberInfo}>
          <td>
            <AvatarMT />
            Mark Tipton
          </td>
          <td>Design</td>
          <td>August 27th, 2024</td>
          <td align="center">
            <DotsIcon />
          </td>
        </tr>
        <tr className={styles.tableMemberInfo}>
          <td>
            <AvatarLC />
            Lauren Chevalier
          </td>
          <td>Engineering</td>
          <td>December 17th, 2022</td>
          <td align="center">
            <DotsIcon />
          </td>
        </tr>
        <tr className={styles.tableMemberInfo}>
          <td>
            <AvatarSJ />
            Sylvester Jenkins
          </td>
          <td>DevOps</td>
          <td>June 17th, 2012</td>
          <td align="center">
            <DotsIcon />
          </td>
        </tr>
      </tbody>
      <tfoot className={styles.tableFooter}>
        <tr>
          <td></td>
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
    </table>
  );
};

export default UserTable;
