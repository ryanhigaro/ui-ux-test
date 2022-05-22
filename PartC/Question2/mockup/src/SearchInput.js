import React from "react";
import styles from "./SearchInput.module.css";
import { Autocomplete, TextField, Popper } from "@mui/material";
import { names } from "./names";

export default function SearchInput() {

  const CustomPopper = function (props) {
    return (
      <div>
        <div className={styles.arrowUp}></div>
        <Popper {...props} />
      </div>
    );
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        freeSolo
        disableClearable
        options={names}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            placeholder="Search"
            classes={{ root: styles.search }}
            InputProps={{
              ...params.InputProps,
              type: "text",
            }}
          />
        )}
        PopperComponent={CustomPopper}
        classes={{
          root: styles.searchInput,
          popper: styles.popper,
          paper: styles.paper,
        }}
      />
    </div>
  );
}
