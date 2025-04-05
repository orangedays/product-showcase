import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}

const FallbackImage = ({ 
  src, 
  alt, 
  className = '', 
  imageClassName = '',
  width = 0,
  height = 0 
}: FallbackImageProps) => {
  return (
    <div className={`relative bg-gray-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto ${imageClassName}`}
        onError={e => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );
};

export default FallbackImage;