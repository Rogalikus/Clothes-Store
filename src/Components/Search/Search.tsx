import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/reducers/filter-reducer";

export const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    searchRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 750),
    []
  );

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      updateSearchValue(event.target.value);
    },
    [updateSearchValue]
  );

  return (
    <div className={styles.search}>
      <input
        ref={searchRef}
        value={value}
        onChange={onChangeInput}
        placeholder="Пошук"
      />
      <div>
        {value && (
          <CloseIcon
            onClick={onClickClear}
            style={{ width: 35, height: 35, marginTop: 5 }}
          />
        )}
      </div>
    </div>
  );
};
