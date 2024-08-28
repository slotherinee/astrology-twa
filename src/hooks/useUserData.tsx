import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

type UserData = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
};

export const useUserData = () => {
  const userData = WebApp.initDataUnsafe.user as UserData;
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
    }
  }, [userData]);
  return userInfo;
};
