const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-full space-x-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
