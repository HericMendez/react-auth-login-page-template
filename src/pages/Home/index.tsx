import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [farms, setFarms] = useState<[]>([]);
  const api = useApi();

  console.log(farms);
  useEffect(() => {
    (async function getFarms() {
      const token = localStorage.getItem("authToken")!;
      console.log(token)
      await api.getFarms(token, setFarms);
    })();
  }, []);

  return (
    <div>
      <br /><br />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
