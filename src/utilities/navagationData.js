const user = {
  name: "Grogu",
  email: "grogu@thekid.com",
  imageUrl:
    "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Characters", href: "#", current: true },
  { name: "Planets", href: "#", current: false },
  { name: "Spaceships", href: "#", current: false },
  { name: "Vehicles", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { user, navigation, userNavigation };
