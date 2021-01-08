import React, { useState } from "react";
import catsApi from "../apis/catsApi";
import { Form, Button, Label, Input } from "semantic-ui-react";

export const UploadCat = () => {
  const [uploadEnabled, setUploadEnabled] = useState(false);
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
          <Label>Upload a cat in .jpg or .png format</Label>
          <Input
            type="file"
            ref={fileInput}
            accept=".jpg,.png"
            onChange={(e, { value }) =>
              value ? setUploadEnabled(true) : setUploadEnabled(false)
            }
          />
        </Form.Field>
        <Button type="submit" color="purple" disabled={!uploadEnabled}>
          Upload
        </Button>
      </Form>
    </div>
  );
};
