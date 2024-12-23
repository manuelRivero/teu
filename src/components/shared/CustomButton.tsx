import React from 'react';

interface Props {
  bgColor: string;
  textColor?: string;
  text: string;
  cb: () => void;
  width?: string;
  textSize?: string;
}

export default function CustomButton({
  bgColor,
  textColor = 'white',
  text,
  cb,
  width = 'fit',
  textSize = 'small',
}: Props) {
  return (
    <button
      onClick={() => cb()}
      type="button"
      className={`bg-${bgColor} w-${width} hover:scale-110 transition-all px-12 py-3 rounded-xl text-${textSize} text-${textColor} text-center font-bold`}
    >
      {text}
    </button>
  );
}
