const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full justify-center bg-container text-white">
      <div className="min-h-screen w-full max-w-2xl space-y-5">{children}</div>
    </main>
  );
};

export default Container;
