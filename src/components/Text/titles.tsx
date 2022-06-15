interface IProps {
  text?: string;
  children?: React.ReactNode;
}

export const TitleBlue = ({ text, children }: IProps) => (
  <p className="text-center font-semibold text-blue-500 text-lg mb-4">
    {children ?? text}
  </p>
);

export const SubTitleBlack = ({ text, children }: IProps) => (
  <p className="text-left font-semibold text-gray-600 text-base mb-1">
    {children ?? text}
  </p>
);
