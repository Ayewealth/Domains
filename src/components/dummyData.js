export const initialTableData = [
  {
    id: Math.floor(Math.random() * 1000000),
    domainPrice: 15.0,
    status: "Running",
    createdAt: new Date("2023-11-08"),
    action: "Edit",
    selected: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    domainPrice: 18.0,
    status: "Will Expire",
    createdAt: new Date("2023-11-08"),
    action: "Delete",
    selected: false,
  },
];
