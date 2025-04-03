import { BaseSyntheticEvent, useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import clsx from "clsx";

type ModalProps = {
  headerText: string;
  fullName: string;
  userId?: string;
  roleId?: string;
  updatedRoleName?: string;
  onDeleteUser?(userId: string): void;
  onNameChange?(event: BaseSyntheticEvent): void;
  onSubmitRoleNameChange?(event: BaseSyntheticEvent, roleId: string): void;
};

const Modal = ({
  headerText,
  fullName,
  userId,
  onDeleteUser,
  roleId,
  onSubmitRoleNameChange,
  onNameChange,
  updatedRoleName,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleConfirmation = (event: BaseSyntheticEvent) => {
    closeDialog();
    if (onDeleteUser && userId) {
      onDeleteUser(userId);
    }
    if (onSubmitRoleNameChange && roleId) {
      onSubmitRoleNameChange(event, roleId);
    }
  };
  return (
    <>
      <dialog ref={dialogRef} className={styles.dialog}>
        <section>
          <h2
            id="dialog-title"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            {headerText}
          </h2>
          <section>
            {userId && (
              <div>
                Are you sure? The user <strong>{fullName}</strong> will
                permanently be deleted
              </div>
            )}
            {/* Change composition of the component later */}
            {roleId && (
              <div>
                <form onSubmit={handleConfirmation}>
                  <label htmlFor="role">Change role name to: </label>
                  <input
                    name="role"
                    aria-label="role name input"
                    value={updatedRoleName}
                    onChange={onNameChange}
                  />
                </form>
              </div>
            )}
          </section>
          <div className={styles.buttonGroup}>
            <button
              className={styles.cancelButton}
              onClick={() => closeDialog()}
            >
              Cancel
            </button>
            <button
              className={clsx({
                [styles.deleteButton]: userId,
                [styles.confirmButton]: !userId,
              })}
              onClick={handleConfirmation}
            >
              {userId ? "Delete user" : "Confirm"}
            </button>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Modal;
