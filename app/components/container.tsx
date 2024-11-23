const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-container flex min-h-screen w-full justify-center text-white">
      <div className="min-h-screen w-full max-w-2xl space-y-5 px-5 md:px-0">
        {children}
      </div>
    </main>
  );
};

export default Container;
