import Feature from "../Components/Feature";

const Features = () => {
  return (
    <section className="p-3">
      <div className="text-center">
        <h2 className="font-xxl">Write less ... Do more</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          alias.
        </p>
      </div>
      {/* feature */}
      <div className="py-4 features-col gap-2 display-g col-3">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </section>
  );
};
export default Features;
