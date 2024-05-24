import curve1 from "../assets/testimonials/curve-1.svg";
import curve2 from "../assets/testimonials/curve-2.svg";

export const RightCurve = () => {
  return (
    <div className="absolute top-1/2 left-[96%] w-[20.125rem] -mt-1 ml-10 pointer-events-none block">
      <img src={curve2} width={320} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="absolute top-1/2 right-[77%] w-[32.625rem] -mt-1 mr-10 pointer-events-none block">
      <img src={curve1} width={422} height={182} alt="Curve 1" />
    </div>
  );
};