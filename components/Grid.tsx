export const Grid = ({ className = "", children }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-x-16 ${className}`}>
      {children}
    </div>
  );
};
