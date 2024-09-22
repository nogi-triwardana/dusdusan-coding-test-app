const Homebar = ({
  items
}: TNavbarProps) => {
  return (
    <div className="flex flex-row w-full">
      {items.map((item, key) => (
        <button
          key={'button-navbar-' + key}
          className="bg-[#00b0b9] w-full text-xs font-bold p-[10px] text-white focus:outline-none uppercase"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Homebar;