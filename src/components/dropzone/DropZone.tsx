import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

//components
import { Input } from "./Input";
import { InputWithFile } from "./InputWithFile";
import "./DropZone.css";

export const DropZone: React.FC = () => {
  const { acceptedFiles, getRootProps, open, getInputProps } = useDropzone({
    noClick: true,
  });
  const [isFileLoaded, setIsFileLoaded] = useState<boolean>(false);

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {/*  */}
        {(files.length < 1 && (
          <div onClick={open}>
            <Input />
          </div>
        )) || <InputWithFile fileName={acceptedFiles[0].name} />}
      </div>
    </section>
  );
};
