const BASE_URL = `http://localhost:3002`;

export const fetchUsers = async (searchTerm: string = "") => {
  const data = await fetch(`${BASE_URL}/users?search=${searchTerm}`);

  if (!data.ok) {
    throw new Error("Request errored");
  }

  const response = await data.json();
  return response;
};

export const deleteUser = async (userId: string) => {
  const request = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE",
  });
  if (!request.ok) {
    throw new Error("Could not delete given id");
  }
  const response = await request.json();
  return response;
};

export const fetchRoles = async () => {
  const data = await fetch(`${BASE_URL}/roles`);

  if (!data.ok) {
    throw new Error("Request errored");
  }

  const response = await data.json();
  return response;
};

export const updateRole = async (
  roleId: string,
  updatedData: { name: string; description: string; isDefault: boolean }
) => {
  const data = await fetch(`${BASE_URL}/roles/${roleId}`, {
    method: "PATCH",
    body: JSON.stringify(updatedData),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
  if (!data.ok) {
    console.log({ data });
    throw new Error("Could not update this role");
  }

  const response = await data.json();
  return response;
};
