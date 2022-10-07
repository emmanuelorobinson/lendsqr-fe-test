export interface User {
  id: string;
  email: string;
}

export const getUser = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const removeUser = () => {
  localStorage.removeItem('user');
}
