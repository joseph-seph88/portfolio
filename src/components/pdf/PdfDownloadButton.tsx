'use client';

import dynamic from 'next/dynamic';

const PdfDownloadButtonInner = dynamic(
  () => import('./PdfDownloadButtonInner'),
  { ssr: false, loading: () => <PdfPlaceholder /> },
);

function PdfPlaceholder() {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 24px',
        borderRadius: 8,
        backgroundColor: '#f3f4f6',
        color: '#9ca3af',
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      PDF 준비 중...
    </span>
  );
}

export default function PdfDownloadButton() {
  return <PdfDownloadButtonInner />;
}
