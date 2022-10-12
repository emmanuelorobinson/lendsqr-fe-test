export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: profile;
  guarantor: guarantor;
  accountBalance: number;
  accountNumber: string;
  socials: socials;
  education: education;
  id: string;
}

export interface profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface socials {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: Array<string>;
  loanRepayment: number;
}

export const getUser = () => {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  }
  return [];
};

export const getUserById = (id: number) => {
  const users = getUser();
  const user = users.find((user: User) => Number(user.id) === id);
  return user;
};

export const setUsers = (users: User[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const removeUser = (id: string) => {
  const users = getUser();
  const newUsers = users.filter((user: User) => user.id !== id);
  setUsers(newUsers);
};

export const removeUsers = () => {
  localStorage.removeItem("users");
}

