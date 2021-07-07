import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

//components
import { Input } from "./Input";
import { InputWithFile } from "./InputWithFile";
import "./DropZone.css";

export const DropZone: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {/* <Input />
        <p className="dropzone-label">{`or drop files here`}</p> */}
      </div>
    </section>
  );
};
