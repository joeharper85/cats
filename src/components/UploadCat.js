import React from "react";
import catsApi from "../apis/catsApi";
import { Form, Button } from "semantic-ui-react";

export const UploadCat = () => {
  const fileInput = React.useRef();

  const onUploadSubmit = async (term) => {
    let formData = new FormData();
    formData.append("file", fileInput.current.files[0]);
    await catsApi.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <Form onSubmit={onUploadSubmit}>
        <Form.Field>
          <label>Select a cat</label>
          <input type="file" ref={fileInput} />
        </Form.Field>
        <Button type="submit">Upload</Button>
      </Form>
    </div>
  );
};
