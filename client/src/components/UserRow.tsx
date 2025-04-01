import styles from "./UserTable.module.css";
import DotsIcon from "./DotsIcon";
import { User } from "../helpers/types";
import { formatDate, getRoleNameById } from "../helpers/utils";

const UserRow = ({ user }: { user: User }) => {
  const { first, last, photo, roleId, createdAt } = user;

  return (
    <tr className={styles.tableMemberInfo}>
      <td>
        <img src={`${photo}`} alt="avatar" />
        {`${first} ${last}`}
      </td>
      <td>{getRoleNameById(roleId)}</td>
      <td>{formatDate(createdAt)}</td>
      <td align="center">
        <DotsIcon />
      </td>
    </tr>
  );
};

export default UserRow;
