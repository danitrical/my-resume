export const Header = () => {
  const links = ['Home', 'About Me', 'Experiences', 'Contact Me']
  return (
    <>
  <div className="flex flex-row bg-transparent backdrop-blur-md w-full rounded-xl shadow-md justify-center text-white my-2 content-center h-[50px] justify-around">
      <h1 className="pl-5 font-bold text-left text-3xl text-black w-2/3">Danish Asim</h1>
    <div className="flex flex-row justify-around w-1/3 pr-5">
      {links.map((_) => 
      <h1 className="font-regular text-md text-black">{_}</h1>

      )}
      
    </div>
  </div>
    </>
  )
};
