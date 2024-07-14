"use client"
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react'

function Test() {
  //   const lang = useTranslations('lang');
  
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.document.dir = lang("direction") === "right" ? 'rtl' : 'ltr';
  //   }
  // }, [lang]);
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div onClick={scrollToTop}>Test</div>
  )
}

export default Test