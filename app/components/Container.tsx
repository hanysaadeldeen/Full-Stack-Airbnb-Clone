"use client";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
      xl:px-20
        lg:px-16
        md:px-10
        sm:px-2
        px-4
    "
    >
      {children}
    </div>
  );
};

export default Container;
