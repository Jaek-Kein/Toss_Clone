import { useEffect } from "react";
import useDataStore from "./Store/useDataStore";
import View from "./view/View";

function App() {
  const { loadData } = useDataStore();
  useEffect(() => {
    loadData();
  });
  return (
    <>
      <View />
    </>
  );
}

export default App;
