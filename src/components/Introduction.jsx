import SuccessGraph from "./SuccessGraph";

const Introduction = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold flex justify-center mb-3 mt-16">
        Success Stories
      </h2>
      <p className="text-xl mb-12 flex justify-center">
        A2SV has turned the dreams of African software engineers into a reality
        and continues to thrive.
      </p>
      <h3 className="text-sm flex justify-center">
        Google SWE Interviews Acceptance Rate Comparison
      </h3>
      <p className="text-lg flex justify-center mb-2">
        A2SV students are 35 times more likely to pass Google SWE interviews
        than average candidates
      </p>
      <SuccessGraph />
    </div>
  );
};

export default Introduction;
