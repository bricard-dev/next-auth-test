export default function Footer() {
  return (
    <footer className="p-6 bg-muted">
      <p className="text-muted-foreground text-sm text-center">
        © {new Date().getFullYear()} Blog. Tous droits réservés.
      </p>
    </footer>
  );
}
