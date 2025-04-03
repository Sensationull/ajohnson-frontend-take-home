import { RoleTableProps } from "../../helpers/types";

import RoleRow from "./RoleRow";

const RowTableBody = ({ roleInfo }: RoleTableProps) => {
  const { data: roles } = roleInfo;

  return (
    <>
      <tbody>
        {roles.map((role) => (
          <RoleRow key={role.id} role={role} />
        ))}
      </tbody>
    </>
  );
};

export default RowTableBody;
