"use client";

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function GiscusComments() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[300px] w-full animate-pulse bg-muted/20 rounded-2xl" />;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const giscusTheme = currentTheme === 'dark' ? 'dark_dimmed' : 'light';

  return (
    <div className="w-full mt-10">
      <Giscus
        id="comments"
        repo="chirag-x/Portfolio_V3"
        repoId="R_kgDOUVp_Og"
        category="General"
        categoryId="DIC_kwDOUVp_Os4DFDoB"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={giscusTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
