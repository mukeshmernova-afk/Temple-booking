export default function Card({title, subtitle, children}){
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      <div className="mt-3">{children}</div>
    </div>
  );
}
