import styles from "../Table/Table.module.css";
import DotsIcon from "../Icons/DotsIcon";
import { User } from "../../helpers/types";
import { formatDate, getRoleNameById } from "../../helpers/utils";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../helpers/APIRequests";

const UserRow = ({ user }: { user: User }) => {
  const queryClient = useQueryClient();

  /* Context Menu state */
  const [isMenuOpen, setMenuOpen] = useState(false);
  /* Modal state */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { first, last, photo, roleId, createdAt, id } = user;
  /* Delete User mutation */
  const mutateDeleteUser = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] }); // Wait for users to refresh
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
    onSettled: () => {
      toggleModal();
    },
  });

  const { mutate: onDelete } = mutateDeleteUser;

  /* Generic Handlers */
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
            <button className={styles.buttonIsDisabled}>Edit User</button>
            <button onClick={toggleModal}>Delete User</button>
          </div>
        )}
        {isModalOpen && (
          <Modal
            headerText="Delete user"
            fullName={`${first} ${last}`}
            userId={id}
            onDeleteUser={onDelete}
          />
        )}
      </td>
    </tr>
  );
};

export default UserRow;
