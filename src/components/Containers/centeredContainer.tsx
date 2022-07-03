interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const CenteredContainer = ({ children, className }: IProps) => (
  <div
    className={`bg-white 200 rounded w-2/3 mx-auto p-2 border ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);
