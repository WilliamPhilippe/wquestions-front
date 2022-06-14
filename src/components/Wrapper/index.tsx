interface IProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: IProps) => {
  return (
    <div className="w-screen max-w-full h-screen bg-gray-100 px-2 pt-4">
      {children}
    </div>
  );
};
