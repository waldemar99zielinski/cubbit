import React, { useCallback, Dispatch } from "react";
import { useDropzone } from "react-dropzone";

//components
import { Input } from "./Input";
import { InputWithFile } from "./InputWithFile";
import "./DropZone.css";

interface Props {
  file: any;
  setFile: Dispatch<any>;
}

export const DropZone: React.FC<Props> = ({ file, setFile }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, open, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
  });

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {(file === null && (
          <div onClick={open}>
            <Input />
          </div>
        )) || (
          <div onClick={open}>
            <InputWithFile fileName={file ? file.name : ""} />
          </div>
        )}
      </div>
    </section>
  );
};
