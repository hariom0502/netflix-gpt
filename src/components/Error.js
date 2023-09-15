import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOps!!</h1>
      <h1>Something went wrong!!</h1>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};
export default Error;