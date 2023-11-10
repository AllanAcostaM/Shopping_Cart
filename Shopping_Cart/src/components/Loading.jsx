import { quantum } from "ldrs";

quantum.register();

// Default values shown

const Loading = () => {
  return (
    <div className="loading">
      <l-quantum size="80" speed="1.65" color="rgb(30, 28, 146)"></l-quantum>
      <h2>Loading shopping Cart</h2>
    </div>
  );
};

export default Loading;
