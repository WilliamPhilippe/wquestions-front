interface IProps {
  children: React.ReactNode;
}

export const CenteredContainer = ({ children }: IProps) => (
  <div className="bg-white 200 rounded w-1/2 mx-auto p-2 border">
    {children}
  </div>
);
