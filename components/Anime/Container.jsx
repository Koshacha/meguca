export default function Container({ children }) {
  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60">
        <div className="flex flex-col justify-center items-start w-full mx-auto pb-16">
          {children}
        </div>
      </div>
    </div>
  );
}
