import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden max-h-screen items-center justify-center flex-1 bg-secondary text-primary-foreground">
      {children}
    </div>
  );
};
