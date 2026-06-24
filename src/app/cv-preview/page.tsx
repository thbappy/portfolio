import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanbeer Hasan CV",
  description: "Curriculum Vitae of Md. Tanbeer Hasan - Full Stack Developer",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CvPreviewPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#050505" }}>
      <iframe
        src="/Tanbeer_Hasan_CV.pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Tanbeer Hasan CV"
      />
    </div>
  );
}
