import { useState } from "react";
import { Role } from "../helpers/types";
import styles from "./UserTable.module.css";
import DotsIcon from "./DotsIcon";
import { formatDate } from "../helpers/utils";
import Modal from "./Modal";

const RoleRow = ({ role }: { role: Role }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, description, createdAt, id } = role;

  const toggleContextMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMenuOpen(false);
  };

  return (
    <tr className={styles.tableMemberInfo}>
      <td>{name}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{description}</td>
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
            fullName={`${name}`}
            userId={id}
          />
        )}
      </td>
    </tr>
  );
};

export default RoleRow;
