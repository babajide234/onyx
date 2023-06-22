/* eslint-disable react/prop-types */

const Ripple = ({ count, ...rest }) => {
    const totalDuration = 0.4 * (count - 1);

    const ripples = Array.from({ length: count }).map((_, index) => {
      const size = 53 * Math.pow(2, index);
      const delay = 1 * index;
      const style = {
        height: `${size}px`,
        width: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${totalDuration}s`,
      };
      return (
        <div
          key={index}
          className="animate-growAndFade bg-primary/30 rounded-full opacity-0 absolute"
          style={style}
        />
      );
    });
  
    return (
      <div  {...rest}>
        {ripples}
      </div>
    );
  };
  
  export default Ripple;
  