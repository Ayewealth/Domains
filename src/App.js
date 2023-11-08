import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Domain from "./components/Domain";
import { DomainProvider } from "./context/DomainContex";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DomainProvider>
        <>
          <Domain />
        </>
      </DomainProvider>
    </QueryClientProvider>
  );
}

export default App;
