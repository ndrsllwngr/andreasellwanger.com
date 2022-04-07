import { FunctionComponent, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Container: FunctionComponent<Props> = ({ className = '', children }: Props) => {
  return <div className={`container mx-auto flex flex-col px-5 ${className}`}>{children}</div>;
};

export default Container;
