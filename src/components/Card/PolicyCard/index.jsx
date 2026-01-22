import Link from "next/link";

const PolicyCard = ({ name, description, link, dl = true }) => {
  return (
    <div className="md:max-w-md xl:max-w-lg px-4 w-full xl:px-8 mx-auto mt-8">
      <div className="flex flex-col items-center justify-center w-full h-full bg-quackred-50 rounded-lg shadow-lg overflow-hidden ">
        <div className="px-6 py-8 bg-quackred-50 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 text-center">
            {name}
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-700 text-center">{description}</p>
        </div>
        <div className="px-6 py-8 text-center bg-gray-50 lg:p-12 bg-quackred-200 w-full mt-auto">
          {dl ? (
            <a
              href={link}
              download
              className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-quackred-400 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Download
            </a>
          ) : (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link}
              className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-quackred-400 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
