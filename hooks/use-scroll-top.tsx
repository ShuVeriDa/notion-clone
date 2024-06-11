import {useEffect, useState} from "react";

//This hook needed to, for example: to add border-bottom, when we scroll the page by 10px
export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])
  
  return scrolled
}