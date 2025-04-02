import { BaseSyntheticEvent, useEffect, useRef } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  headerText: string;
  fullName: string;
  userId?: string;
  roleId?: string;
  updatedRoleName?: string;
  onReset(): void;
  onDeleteUser?(userId: string): void;
  onNameChange?(event: BaseSyntheticEvent): void;
  onSubmitRoleNameChange?(event: BaseSyntheticEvent, roleId: string): void;
};

const Modal = ({
  headerText,
  onReset,
  fullName,
  userId,
  onDeleteUser,
  roleId,
  onSubmitRoleNameChange,
  onNameChange,
  updatedRoleName,
}: ModalProps) => {
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = (shouldReset: boolean) => {
    if (dialogRef.current && !shouldReset) {
      dialogRef.current.close();
    } else if (dialogRef.current && shouldReset) {
      onReset();
      dialogRef.current.close();
    }
  };

  const handleConfirmation = (event: BaseSyntheticEvent) => {
    closeDialog(false);
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
              onClick={() => closeDialog(true)}
            >
              Cancel
            </button>
            <button
              className={styles.deleteButton}
              onClick={handleConfirmation}
            >
              Delete user
            </button>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Modal;
