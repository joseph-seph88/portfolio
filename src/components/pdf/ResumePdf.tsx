/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';
import { resumeData } from '@/data/resume-data';
import type { ProjectDetail as ProjectDetailType } from '@/types/resume';

Font.register({
  family: 'NanumGothic',
  fonts: [
    { src: '/portfolio/fonts/NanumGothic-Regular.ttf', fontWeight: 'normal' },
    { src: '/portfolio/fonts/NanumGothic-Bold.ttf', fontWeight: 'bold' },
  ],
});

/* ── 웹 Tailwind → PDF pt 매핑 ──
 * mt-15(60px)→36pt  mt-20(80px)→48pt  mb-4(16px)→10pt
 * mb-8(32px)→20pt   gap-12(48px)→30pt  w-60(240px)→30%
 * text-4xl→24pt  text-3xl→18pt  text-xl→12pt
 * text-l→11pt    text-sm→9pt    space-y-2→4pt
 */

const c = {
  gray700: '#374151',
  gray600: '#4b5563',
  gray500: '#6b7280',
  gray400: '#9ca3af',
  gray200: '#e5e7eb',
};

const s = StyleSheet.create({
  page: {
    fontFamily: 'NanumGothic',
    fontSize: 9,
    color: c.gray700,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
  },

  /* ── Section (mt-15 ~ mt-20 + mb-4 + border-b-2 + mb-8) ── */
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: c.gray700,
    marginBottom: 6,
  },
  sectionDivider: {
    borderBottomWidth: 2,
    borderBottomColor: c.gray200,
    marginBottom: 20,
  },
  thinDivider: {
    borderBottomWidth: 1,
    borderBottomColor: c.gray200,
    marginBottom: 20,
  },

  /* ── Two-column (gap-12 → 30pt, mb-8 → 20pt) ── */
  row: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 20,
  },
  left: { width: '30%' },
  right: { width: '70%' },

  /* ── Header ── */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'normal',
    color: c.gray700,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: c.gray400,
    marginTop: 4,
  },
  email: { fontSize: 10, color: c.gray700 },
  emailBold: { fontWeight: 'bold' },
  headerLink: {
    fontSize: 8,
    color: c.gray400,
    textDecoration: 'none',
    marginBottom: 2,
  },

  /* ── About Me ── */
  aboutRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 10,
  },
  profileImage: {
    width: 90,
    height: 80,
    borderRadius: 12,
    objectFit: 'cover',
  },
  aboutText: {
    fontSize: 9,
    color: c.gray700,
    lineHeight: 1.8,
    flex: 1,
  },

  /* ── Company / Org (left col) ── */
  companyName: { fontSize: 12, fontWeight: 'bold', color: c.gray700 },
  companyLink: {
    fontSize: 7,
    color: c.gray400,
    textDecoration: 'none',
    marginTop: 2,
    marginBottom: 3,
  },
  role: { fontSize: 9, fontWeight: 'bold', color: c.gray700, marginTop: 2 },
  period: { fontSize: 9, fontWeight: 'normal', color: c.gray600, marginTop: 2 },

  /* ── Project (right col) ── */
  projectBlock: { marginBottom: 10 },
  projectTitle: { fontSize: 11, fontWeight: 'bold', color: c.gray700 },
  projectStatus: { fontSize: 9, color: c.gray500, fontWeight: 'normal' },
  tags: { fontSize: 9, fontWeight: 'bold', color: c.gray400, marginTop: 1 },
  bulletList: { marginTop: 5 },
  bullet: {
    fontSize: 9,
    fontWeight: 'normal',
    color: c.gray700,
    marginTop: 4,
    paddingLeft: 8,
    lineHeight: 1.4,
  },

  /* ── App screenshots ── */
  imageRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  appImage: {
    width: 65,
    height: 130,
    objectFit: 'contain',
  },

  /* ── Skills ── */
  skillCatTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: c.gray700,
    paddingTop: 24,
  },
  skillItem: {
    fontSize: 9,
    fontWeight: 'normal',
    color: c.gray500,
    marginTop: 4,
    paddingLeft: 8,
  },

  /* ── Certificates & Education ── */
  infoTitle: { fontSize: 12, fontWeight: 'bold', color: c.gray700, paddingTop: 6 },
  infoItem: {
    fontSize: 9,
    fontWeight: 'normal',
    color: c.gray700,
    marginTop: 4,
    paddingLeft: 8,
  },

  /* ── Open-Source ── */
  packageName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: c.gray500,
    paddingTop: 24,
  },
  packageItem: {
    fontSize: 9,
    color: c.gray400,
    marginTop: 3,
    paddingLeft: 8,
  },
});

function ProjectBlock({ project }: { project: ProjectDetailType }) {
  return (
    <View style={s.projectBlock}>
      <Text style={s.projectTitle}>
        {project.title}
        {project.status && <Text style={s.projectStatus}>  ({project.status})</Text>}
      </Text>
      <Text style={s.tags}>{project.tags}</Text>
      <View style={s.bulletList}>
        {project.items.map((item, i) => (
          <Text key={i} style={s.bullet}>{'•  '}{item}</Text>
        ))}
      </View>
    </View>
  );
}

function SectionTitle({ children, first }: { children: string; first?: boolean }) {
  return (
    <>
      <Text style={first ? s.sectionHeading : [s.sectionHeading, { marginTop: 36 }]}>{children}</Text>
      <View style={s.sectionDivider} />
    </>
  );
}

export default function ResumePdf() {
  const d = resumeData;

  return (
    <Document title={`${d.profile.name} 이력서`} author={d.profile.name}>
      <Page size="A4" style={s.page}>

        {/* ══ Header ══ */}
        <View style={s.headerRow}>
          <View>
            <Text style={s.name}>{d.profile.name}</Text>
            <Text style={s.subtitle}>{d.profile.subtitle}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Link src={d.profile.github} style={s.headerLink}>{d.profile.github}</Link>
            <Link src={d.profile.portfolio} style={s.headerLink}>{d.profile.portfolio}</Link>
            <Text style={[s.email, { marginTop: 6 }]}>
              Email: <Text style={s.emailBold}>{d.profile.email}</Text>
            </Text>
          </View>
        </View>

        {/* ══ About Me ══ */}
        <SectionTitle first>About Me</SectionTitle>
        <View style={s.aboutRow}>
          <Image src="/portfolio/assets/images/totoro.png" style={s.profileImage} />
          <Text style={s.aboutText}>{d.aboutMePlainText}</Text>
        </View>

        {/* ══ Experience ══ */}
        <SectionTitle>Experience</SectionTitle>
        {d.experiences.map((exp, idx) => (
          <View key={exp.company}>
            {idx > 0 && <View style={s.thinDivider} />}
            <View style={s.row} wrap={false}>
              <View style={s.left}>
                <Text style={s.companyName}>{exp.company}</Text>
                <Link src={exp.link} style={s.companyLink}>{exp.link}</Link>
                <Text style={s.role}>{exp.role}</Text>
                <Text style={s.period}>{exp.period}</Text>
              </View>
              <View style={s.right}>
                {exp.projects.map((proj, i) => (
                  <ProjectBlock key={i} project={proj} />
                ))}
                {exp.images && exp.images.length > 0 && (
                  <View style={s.imageRow}>
                    {exp.images.map((img, i) => (
                      <Image key={i} src={img.pdfSrc || img.src} style={s.appImage} />
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}

        {/* ══ Project ══ */}
        <SectionTitle>Project</SectionTitle>
        {d.educationProjects.map((ep, idx) => (
          <View key={ep.org}>
            {idx > 0 && <View style={{ marginTop: 16 }} />}
            <View style={s.row} wrap={false}>
              <View style={s.left}>
                <Text style={s.companyName}>{ep.org}</Text>
                <Text style={s.role}>{ep.role}</Text>
                <Text style={s.period}>{ep.period}</Text>
              </View>
              <View style={s.right}>
                {ep.projects.map((proj, i) => (
                  <ProjectBlock key={i} project={proj} />
                ))}
              </View>
            </View>
          </View>
        ))}

        {/* ══ Open-Source ══ */}
        <SectionTitle>Open-Source</SectionTitle>
        {d.openSource.map((os) => (
          <View key={os.name} style={s.row} wrap={false}>
            <View style={s.left}>
              <Text style={s.packageName}>{os.name}</Text>
            </View>
            <View style={s.right}>
              <Link src={os.href} style={[s.headerLink, { fontSize: 9, marginBottom: 6 }]}>{os.href}</Link>
              {os.items.map((item, i) => (
                <Text key={i} style={s.packageItem}>{'•  '}{item}</Text>
              ))}
            </View>
          </View>
        ))}

        {/* ══ Skills ══ */}
        <SectionTitle>Skills</SectionTitle>
        {d.skills.map((cat) => (
          <View key={cat.title} style={s.row}>
            <View style={s.left}>
              <Text style={s.skillCatTitle}>{cat.title}</Text>
            </View>
            <View style={s.right}>
              {cat.items.map((item, i) => (
                <Text key={i} style={s.skillItem}>{'•  '}{item}</Text>
              ))}
            </View>
          </View>
        ))}

        {/* ══ Certificates & Education ══ */}
        <SectionTitle>Certificates & Education</SectionTitle>
        <View style={s.row}>
          <View style={s.left}>
            <Text style={s.infoTitle}>Certificates</Text>
          </View>
          <View style={s.right}>
            {d.certificates.map((item, i) => (
              <Text key={i} style={s.infoItem}>{'•  '}{item}</Text>
            ))}
          </View>
        </View>
        <View style={s.row}>
          <View style={s.left}>
            <Text style={s.infoTitle}>Education</Text>
          </View>
          <View style={s.right}>
            {d.education.map((item, i) => (
              <Text key={i} style={s.infoItem}>{'•  '}{item}</Text>
            ))}
          </View>
        </View>

      </Page>
    </Document>
  );
}
