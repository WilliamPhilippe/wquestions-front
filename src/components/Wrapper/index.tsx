interface IProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: IProps) => {
  return (
    <div className="bg-auto min-h-screen relative w-screen max-w-full bg-gray-100 px-2 py-4">
      {children}
    </div>
  );
};
