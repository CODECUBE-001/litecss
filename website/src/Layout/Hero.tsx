import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="hero display-f py-5 justify-space-around">
      <div className="hero__intro">
        <div className="tag">Low-Code</div>
        <h1 className="font-xxl">Giving HTML Super Power</h1>
        <p className="py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          magni iure voluptatem quis, nobis ad?
        </p>
        <div className="display-f gap-1 align-center">
          <button className="btn">Get Started</button>
          <div className="mx-1 display-f align-center gap-1">
            <FaSearch />
            <input
              type="search"
              className="p-1 outline-none border-style-none"
              name=""
              placeholder="Search Docs"
              id=""
            />
          </div>
        </div>
        <div className="">
          <p className="py-1">Trusted around the world</p>
          <div className="display-f gap-2">
            <img src="/logo.svg" alt="Logo 1" />
            <img src="/logo-1.svg" alt="Logo 2" />
            <img src="/logo-2.svg" alt="Logo 3" />
            <img src="/logo-3.svg" alt="Logo 4" />
          </div>
        </div>
      </div>

      <div className="hero__image relative">
        <img
          src="/pattern.png"
          alt=""
          className="absolute top-half -left-1 -z-1"
        />
        <img src="/demo 2.png" alt="" />
        <img src="/demo 1.png" alt="" className="absolute -bottom-1 -right-1" />
      </div>
    </section>
  );
};
export default Hero;
