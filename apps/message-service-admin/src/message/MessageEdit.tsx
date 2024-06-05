import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
      </SimpleForm>
    </Edit>
  );
};
