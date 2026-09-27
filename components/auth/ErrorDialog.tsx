const ErrorDialog = ({
  status,
  handleRetry,
}: {
  status: boolean;
  handleRetry: () => void;
}) => {
  if (!status) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-md flex justify-center items-center">
      <div className="max-w-105  w-full mx-auto bg-white min-h-64 rounded-md p-4 flex flex-col gap-3 justify-center items-center">
        <h2 className="text-3xl font-semibold text-center">
          Something went wrong
        </h2>
        <button
          className="bg-black px-3 py-2 text-white rounded-md cursor-pointer"
          onClick={handleRetry}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;
