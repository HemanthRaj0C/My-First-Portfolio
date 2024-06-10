export const Menu=(props)=>{

    const {onSectionChange, menuOpened, setMenuOpened}=props;

    return(<>
    <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-orange-600 w-11 h-11 rounded-md"
    >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
    </button>
    <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col rounded-l-3xl
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-10">
          <MenuButton label="Home" onClick={() => onSectionChange(0)} />
          <MenuButton label="About Me" onClick={() => onSectionChange(1)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(2)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(3)} />
          <MenuButton label="Contact Me" onClick={() => onSectionChange(4)} />
        </div>
      </div>    
    </>
    )
}

    const MenuButton = (props) => {
    const { label, onClick, index } = props;
  
    return (
      <button
        onClick={() => onClick(index)}
        className="text-2xl font-bold cursor-pointer hover:text-orange-600 transition-colors "
      >
        {label}
      </button>
    );
  };