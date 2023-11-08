import { createContext, useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { initialTableData } from "../components/dummyData";

const DomainContext = createContext();

export function useDomain() {
  return useContext(DomainContext);
}

export function DomainProvider({ children }) {
  const [tableData, setTableData] = useState(initialTableData);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const fetchData = useQuery("initialTableData", () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialTableData);
      }, 1000);
    });
  });

  const addDataMutation = useMutation((newData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newData);
      }, 1000);
    });
  });

  const handleAddData = async (formData) => {
    try {
      const newId = Math.floor(Math.random() * 1000000);
      const newDate = new Date();

      const newEntry = {
        id: `${newId}`,
        domainPrice: formData.domainPrice,
        status: "Running",
        createdAt: newDate,
        action: "Show Details",
      };

      const newData = await addDataMutation.mutateAsync(newEntry);

      setTableData((prevData) => [...prevData, newData]);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  const contextValue = {
    fetchData,
    handleAddData,
    tableData,

    open,
    handleOpen,
    handleClose,
  };
  return (
    <DomainContext.Provider value={contextValue}>
      {children}
    </DomainContext.Provider>
  );
}
