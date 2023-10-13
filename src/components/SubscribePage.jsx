const SubscribePage = () => {
  return (
    <div className="bg-blue-800 text-white py-24 mb-6">
      <h1 className="text-3xl font-bold flex justify-center mb-6">
        Subscribe to our newsletter!
      </h1>
      <div className="flex justify-center ">
        <form className="w-2/6">
          <div className="mb-3">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="w-full py-2 rounded-lg bg-gray-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstname" className="block mb-2 text-sm">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="w-full py-2 rounded-lg bg-gray-200"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lasttname" className="block mb-2 text-sm">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="w-full py-2 rounded-lg bg-gray-200"
            />
          </div>
          <div>
            <input id="check" type="checkbox" />
            <label htmlFor="id" className="text-sm ps-2">
              Check if related to A2SV as a student, mentor or other
            </label>
          </div>

          <button className="bg-orange-400 px-5 py-2 rounded-lg w-full mt-4">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribePage;
