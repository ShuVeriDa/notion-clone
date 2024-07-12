"use client"

import {FC, useEffect, useState} from 'react';
import {SettingsModal} from "@/components/modals/settings-modal";

interface IModalProviderProps {
}

export const ModalProvider: FC<IModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <SettingsModal/>
    </>
  );
};