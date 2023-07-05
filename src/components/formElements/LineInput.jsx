/* eslint-disable react/prop-types */

const LineInput = ({ error, ...rest }) => {
  return (
    <>
      <div
        className={`w-full border-b focus-within:border-primary border-solid mb-2 ${
          error ? "border-red-500" : "border-[#737373]"
        }`}>
        <input
          className={`w-full py-[10px] outline-none ${
            error
              ? " placeholder:text-red-500/70"
              : " placeholder:text-gray-400"
          } `}
          {...rest}
        />
      </div>
      {error && <div className="text-red-500 text-xs">{error}</div>}
    </>
  );
};

export default LineInput;
