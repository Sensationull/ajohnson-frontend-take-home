import { BaseSyntheticEvent, useState } from "react";
import { Role } from "../../helpers/types";
import styles from "../Table/Table.module.css";
import DotsIcon from "../Icons/DotsIcon";
import { formatDate } from "../../helpers/utils";
import Modal from "../Modal/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRole } from "../../helpers/APIRequests";

const RoleRow = ({ role }: { role: Role }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(role.name);

  const { name, description, createdAt, id, isDefault } = role;

  const toggleContextMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMenuOpen(false);
  };

  const handleNameChange = (event: BaseSyntheticEvent) => {
    setUpdatedName(event.target.value);
  };

  const queryClient = useQueryClient();

  const mutateUpdateRole = useMutation({
    mutationFn: ({
      id,
      updatedData,
    }: {
      id: string;
      updatedData: { name: string; description: string; isDefault: boolean };
    }) => updateRole(id, updatedData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
    onError: (error) => {
      console.error({ error });
    },
    onSettled: () => {
      toggleModal();
    },
  });

  const { mutate: handleUpdate, isPending } = mutateUpdateRole;

  const handleUpdateRole = (
    roleId: string,
    newRoleData: { name: string; description: string; isDefault: boolean }
  ) => {
    return handleUpdate({ id: roleId, updatedData: newRoleData });
  };

  const handleSubmit = (event: BaseSyntheticEvent, id: string) => {
    event.preventDefault();
    if (!updatedName) {
      return;
    }
    handleUpdateRole(id, {
      name: updatedName,
      description: description || "foo",
      isDefault,
    });
  };

  return (
    <tr className={styles.tableMemberInfo}>
      <td>{isPending ? "Loading" : name}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{description}</td>
      <td align="center">
        <button className={styles.dotContainer} onClick={toggleContextMenu}>
          <DotsIcon />
        </button>
        {isMenuOpen && (
          <div className={styles.contextMenu}>
            <button onClick={toggleModal}>Edit Role Name</button>
            <button className={styles.buttonIsDisabled}>Delete Role</button>
          </div>
        )}
        {isModalOpen && (
          <Modal
            headerText={`Edit role name: ${name}`}
            fullName={`${name}`}
            roleId={id}
            onNameChange={handleNameChange}
            updatedRoleName={updatedName}
            onSubmitRoleNameChange={handleSubmit}
          />
        )}
      </td>
    </tr>
  );
};

export default RoleRow;
