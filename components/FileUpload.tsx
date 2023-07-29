'use client'
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { BsPlusCircleDotted } from "react-icons/bs";

const FileUpload: React.FC = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // store file array to state
      setPreviewImages((prevImages) => prevImages.concat(fileArray));

      // free memory when ever this component is unmounted
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file.name));
    }
  };

  const removeImagePreview = (url: string) => {
    setPreviewImages((prevImages) => prevImages.filter((img) => img !== url));
  };

  return (
    <div className="container mx-auto">
  <div className="grid grid-cols-2 gap-4">
        
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-2xl">
                   <BsPlusCircleDotted />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 mt-4 "><span className="font-semibold text-xl">Add Images</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400"><span className="text-blue-400 text-lg">Browse files</span> <span className="text-xs"></span>from gallery or camera</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" aria-label="Upload" multiple accept="image/*" onChange={handleImageChange}  />
            </label>
        </div> 

      {/* view preview */}
        {previewImages.map((src, index) => (
            <div key={index} className="relative">
            <button
              className="absolute top-1 right-3 bg-slate-300 text-black rounded-full px-1 text-sm"
              onClick={() => removeImagePreview(src)}
            >
              X
            </button>
          <Image key={index} src={src} alt={`Preview ${index}`}
           className="object-contain h-48 w-full" 
           width={200} height={200}
           />
           </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
