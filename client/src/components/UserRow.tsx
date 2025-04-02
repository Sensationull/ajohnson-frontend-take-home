import styles from "./UserTable.module.css";
import DotsIcon from "./DotsIcon";
import { User } from "../helpers/types";
import { formatDate, getRoleNameById } from "../helpers/utils";
import { useState } from "react";
import Modal from "./Modal";

const UserRow = ({ user }: { user: User }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { first, last, photo, roleId, createdAt, id } = user;

  const toggleContextMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMenuOpen(false);
  };

  return (
    <tr className={styles.tableMemberInfo}>
      <td>
        <img src={`${photo}`} alt="avatar" />
        {`${first} ${last}`}
      </td>
      <td>{getRoleNameById(roleId)}</td>
      <td>{formatDate(createdAt)}</td>
      <td align="center">
        <button className={styles.dotContainer} onClick={toggleContextMenu}>
          <DotsIcon />
        </button>
        {isMenuOpen && (
          <div className={styles.contextMenu}>
            <button>Edit User</button>
            <button onClick={toggleModal}>Delete User</button>
          </div>
        )}
        {isModalOpen && (
          <Modal
            headerText="Delete user"
            onReset={toggleModal}
            fullName={`${first} ${last}`}
            userId={id}
          />
        )}
      </td>
    </tr>
  );
};

export default UserRow;
