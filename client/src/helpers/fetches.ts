export const fetchUsers = async (searchTerm: string = "") => {
  const data = await fetch(`http://localhost:3002/users?search=${searchTerm}`);

  if (!data.ok) {
    throw new Error("Request errored");
  }

  const response = await data.json();
  return response;
};
