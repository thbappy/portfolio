/**
 * Simple footer with copyright.
 */
export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Md. Tanbeer Hasan.</p>
    </footer>
  );
}
