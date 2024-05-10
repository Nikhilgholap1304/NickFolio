import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorComponent = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#af4eff",
        }}
        outerStyle={{
          border: "3px solid #e9ceff",
        }}
      />
    </>
  );
};

export default AnimatedCursorComponent;
