export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Devasthanam — Designed for demo. Contact: info@readytechsolutions.in
      </div>
    </footer>
  );
}