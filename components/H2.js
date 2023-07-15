function getAnchor(text) {
  if (text){
    if (text.toLowerCase()){
      return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
  }
  }
  else{
    return text
  }
  }
  const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <h2 id={anchor} className="relative mt-3 border-t-2 border-rose-200/5 pt-9 2xl:text-5xl text-white mb-2 2xl:mb-6 font-bold sm:text-3xl">
        <a href={link} className="anchor-link">
          
        </a>
        {children}
      </h2>
    );
  };
  export default H2;

