interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <span
      className={`relative top-[2px] px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
