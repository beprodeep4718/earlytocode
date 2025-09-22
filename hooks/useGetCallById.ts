import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";

export const useGetCallById = (id: ParamValue) => {
  const [isCallLoading, setisCallLoading] = useState(true);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;
    const loadcalls = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });
      if (calls.length > 0) {
        setCall(calls[0]);
      }
      setisCallLoading(false);
    };
    loadcalls();
  }, [client, id]);

  return { isCallLoading, call };
};
