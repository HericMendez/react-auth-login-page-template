import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";

const GatewayList = () => {
  const [gateways, setGateways] = useState<[]>([]);
  const api = useApi();

  console.log(gateways);
  useEffect(() => {
    (async function getGateways() {
      const token = localStorage.getItem("authToken")!;
      console.log(token);
      await api.getGateways(token, setGateways);
    })();
  }, []);

  return (
    <div>
      <br /> <br />
      <h2>GatewayList</h2>
    </div>
  );
};

export default GatewayList;
