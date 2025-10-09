import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from "../conf/conf";

export default function RTE({ name, control, label, defaultValue = "" }) {
  useEffect(() => {
    // Ensure content is updated when component mounts
    if (defaultValue) {
      console.log("Initial content:", defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue} // Ensure defaultValue is set for initial state
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={conf.apiRTE}
            initialValue={value || defaultValue} // Use value from react-hook-form or default
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image", "advlist", "autolink", "lists", "link", "image", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor",
              ],
              toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(newContent) => {
              console.log("Editor content changed:", newContent);
              onChange(newContent); // Pass the HTML content to react-hook-form
            }}
          />
        )}
      />
    </div>
  );
}
