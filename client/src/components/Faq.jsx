import image from "../assets/undraw_account_re_o7id.svg"

const Faq = () => {
  return (
    <div className="hero px-4 bg-base-100">
      
      <div className="flex lg:flex-row flex-col items-center w-full gap-6  justify-between  my-12">
        <img className="lg:max-w-2xl " src={image} alt=""  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
        <div className=" w-full  shadow-lgxl bg-base-100" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              What are alternative products?
              </div>
              <div className="collapse-content">
                <p>Alternative products are substitutes for conventional items, offering different features, materials, or functions to meet specific needs.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
              How do I find alternative products?
              </div>
              <div className="collapse-content">
                <p>You can discover alternative products through online platforms, specialty stores, or by seeking recommendations from experts or communities.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
              Why choose alternative products?
              </div>
              <div className="collapse-content">
                <p>Alternative products often provide unique benefits such as sustainability, affordability, or enhanced performance compared to traditional options.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
              Are alternative products reliable?
              </div>
              <div className="collapse-content">
                <p>Many alternative products undergo rigorous testing and development to ensure quality and reliability, offering viable alternatives to mainstream choices.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
              How can I determine if an alternative product is suitable for me?
              </div>
              <div className="collapse-content">
                <p>Consider factors such as your preferences, needs, budget, and any specific requirements to assess the suitability of an alternative product.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
