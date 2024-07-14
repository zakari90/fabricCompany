import React from 'react';
import { useTranslations } from 'next-intl';

export default function Announcement({ locale }: { locale: string }) {
  const t = useTranslations('announcement');
  const isRtl = locale === "ar";

  return (
    <div className="h-6 bg-secondary text-secondary-foreground  w-full text-center news-bar-container">
      <div className={isRtl ? 'marqueeAr' : 'marquee'}>
        {t("content")}
      </div>
    </div>
  );
}
