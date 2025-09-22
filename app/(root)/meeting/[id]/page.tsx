"use client";
import Loader from "@/components/custom/Loader";
import MeetingRoom from "@/components/custom/MeetingRoom";
import MeetingSetUp from "@/components/custom/MeetingSetUp";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useAuthStore } from "@/store/auth.store";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import React, { useState } from "react";


const Meeting = () => {
  const { id } = useParams();
  const { isLoading } = useAuthStore();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const {theme} = useTheme();

  if (isLoading || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme className={theme}>
          {isSetupComplete ? (
            <MeetingRoom />
          ) : (
            <MeetingSetUp setIsSetupComplete={setIsSetupComplete} />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
