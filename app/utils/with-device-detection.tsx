"use client"

import { AppProps } from "next/app";
import { CustomAppProps } from "./custom-app-props";
import { useEffect, useState } from "react";
import { isMacOS } from "./detection/is-mac-device";
import { isMobileDevice } from "./detection/is-mobile-server";

export const withDeviceDetection = (App: React.ComponentType<CustomAppProps>) => {
  const AppWithDeviceDetection = (props: AppProps) => {

    return <App isMobile={isMobileDevice()} isMac={isMacOS()} {...props} />;
  };

  return AppWithDeviceDetection;
};