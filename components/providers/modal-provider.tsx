"use client"

import {FC, useEffect, useState} from 'react';
import {SettingsModal} from "@/components/modals/settings-modal";
import {CoverImageModal} from "@/components/modals/cover-image-modal";

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
      <CoverImageModal />
    </>
  );
};