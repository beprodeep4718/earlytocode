"use client";

import Loader from "@/components/custom/Loader";
import { useAuthStore } from "@/store/auth.store";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useCallback, useEffect, useRef, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user } = useAuthStore();

  const tokenProvider = useCallback(async () => {
    if (!user) throw new Error("User not logged in");
    const resp = await fetch(`/api/stream-token?userId=${user.$id}`);
    if (!resp.ok) throw new Error("Failed to fetch Stream token");
    const { token } = await resp.json();
    return token;
  }, [user]);

  const clientRef = useRef<StreamVideoClient | undefined>(undefined);

  useEffect(() => {
    // If user logs out, tear down existing client and skip initialization.
    if (!user) {
      clientRef.current?.disconnectUser?.();
      setVideoClient(undefined);
      return; // Do not proceed to create a client.
    }

    if (!apiKey) {
      console.error("NEXT_PUBLIC_STREAM_API_KEY is not set");
      return;
    }

    // Create a new client for the logged-in user.
    const client = new StreamVideoClient({
      apiKey,
      user: { id: user.$id, name: user.name },
      tokenProvider,
    });
    setVideoClient(client);
    clientRef.current = client;

    // Cleanup when user changes or component unmounts.
    return () => {
      clientRef.current?.disconnectUser?.();
      clientRef.current = undefined;
    };
  }, [user, tokenProvider]);

  // If no authenticated user, just render children without StreamVideo context.
  if (!user) return <>{children}</>;

  // While initializing the client for an authenticated user, show loader.
  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoClientProvider;
