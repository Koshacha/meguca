import Image from "next/image";

export default function Background({ children }) {
  return (
    <div className="absolute x-1 top-0 left-0 right-0 bottom-0 pointer-events-none">
      {children}
    </div>
  );
}
