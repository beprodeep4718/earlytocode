"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const MeetingSetUp = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [joinWithMicCamOff, setJoinWithMicCamOff] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );
  }

  useEffect(() => {
    if (joinWithMicCamOff) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [joinWithMicCamOff, call]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview mirror={true} />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <Checkbox
            checked={joinWithMicCamOff}
            onCheckedChange={(checked) => setJoinWithMicCamOff(!!checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
        <Button
          className="rounded-md bg-green-500 px-4 py-2.5"
          onClick={async () => {
            await call.join();
            setIsSetupComplete(true);
          }}
        >
          Join meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetUp;
