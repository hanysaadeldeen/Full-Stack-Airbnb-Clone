"use client";

const MenuIte = ({
  label,
  onclick,
}: {
  label: string;
  onclick: () => void;
}) => {
  return (
    <div className="py-2 px-3 hover:bg-neutral-100 transition-all font-semibold ">
      <h1 onClick={onclick}>{label}</h1>
    </div>
  );
};

export default MenuIte;
