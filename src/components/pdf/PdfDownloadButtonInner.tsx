'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePdf from './ResumePdf';
import { resumeData } from '@/data/resume-data';

export default function PdfDownloadButtonInner() {
  return (
    <PDFDownloadLink
      document={<ResumePdf />}
      fileName={`${resumeData.profile.name}_이력서.pdf`}
      style={{
        display: 'inline-block',
        padding: '10px 24px',
        borderRadius: 8,
        backgroundColor: '#374151',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
      }}
    >
      {({ loading }) => (loading ? 'PDF 생성 중...' : 'PDF 다운로드')}
    </PDFDownloadLink>
  );
}
