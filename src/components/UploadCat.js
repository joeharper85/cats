import React, { useState } from "react";
import catsApi from "../apis/catsApi";
import { Form, Button, Label, Message } from "semantic-ui-react";

export const UploadCat = () => {
  const fileInput = React.useRef();
  const [uploadEnabled, setUploadEnabled] = useState(false);

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
      <Message>
        <Message.Header>No cat pictures to hand?</Message.Header>
        <p>
          You can find AI generated cat pictures here:
          <br />
          <a href="https://thesecatsdonotexist.com/">These cats don't exist</a>
        </p>
      </Message>
      <Form onSubmit={onUploadSubmit}>
        <Form.Field>
          <Label>Upload a cat in .jpg or .png format</Label>
          <input
            type="file"
            ref={fileInput}
            accept=".jpg,.png"
            onChange={(e) =>
              e.target.files ? setUploadEnabled(true) : setUploadEnabled(false)
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
