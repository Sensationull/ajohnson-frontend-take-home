import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../helpers/fetches";

type ModalProps = {
  onReset(): void;
  headerText: string;
  fullName: string;
  userId: string;
};

const Modal = ({ headerText, onReset, fullName, userId }: ModalProps) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const mutateDeleteUser = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] }); // Wait for users to refresh
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
    onSettled: () => {
      onReset();
    },
  });

  const { mutate: onDelete } = mutateDeleteUser;

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = (shouldReset: boolean) => {
    if (dialogRef.current && !shouldReset) {
      dialogRef.current.close();
    } else if (dialogRef.current && shouldReset) {
      onReset();
      dialogRef.current.close();
    }
  };

  const handleDelete = () => {
    closeDialog(false);
    onDelete(userId);
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
            <div>
              Are you sure? The user <strong>{fullName}</strong> will
              permanently be deleted
            </div>
          </section>
          <div className={styles.buttonGroup}>
            <button
              className={styles.cancelButton}
              onClick={() => closeDialog(true)}
            >
              Cancel
            </button>
            <button className={styles.deleteButton} onClick={handleDelete}>
              Delete user
            </button>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Modal;
