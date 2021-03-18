import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

const Filtering = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
    </>
  );
};

export default Filtering;
