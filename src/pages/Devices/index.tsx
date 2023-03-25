import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";

const DeviceList = () => {
  const [devices, setDevices] = useState<[]>([]);
  const api = useApi();

  console.log(devices);
  useEffect(() => {
    (async function getDevices() {
      const token = localStorage.getItem("authToken")!;
      console.log(token);
      await api.getDevices(token, setDevices);
    })();
  }, []);

  return (
    <div>
      <br /> <br />
      <h2>DeviceList</h2>
    </div>
  );
};

export default DeviceList;
