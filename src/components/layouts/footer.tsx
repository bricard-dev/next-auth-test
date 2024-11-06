export default function Footer() {
  return (
    <footer className="p-6">
      <p className="text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} Blog. Tous droits réservés.
      </p>
    </footer>
  );
}
