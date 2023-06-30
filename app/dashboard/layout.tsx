export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>this nav</nav>
      {children}
    </section>
  );
}
