export const fetchUsers = async (searchTerm: string = "") => {
  const data = await fetch(`http://localhost:3002/users?search=${searchTerm}`);

  if (!data.ok) {
    throw new Error("Request errored");
  }

  const response = await data.json();
  return response;
};

export const deleteUser = async (userId: string) => {
  const request = await fetch(`http://localhost:3002/users/${userId}`, {
    method: "DELETE",
  });
  if (!request.ok) {
    throw new Error("Could not delete given id");
  }
  const response = await request.json();
  return response;
};
