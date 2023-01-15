import React, {
  useCallback,
  useContext,
  useRef,
  useState,
  useMemo,
} from "react";
import { ValueContext } from "../Context/Context";
import styles from "./Search.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "lodash.debounce";

export const Search = () => {
  const [value, setValue] = useState("");

  const { setSearchValue } = useContext(ValueContext);
  const searchRef = useRef();

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    searchRef.current.focus();
  };

  const updateSearchValue = useMemo(
    () =>
      debounce((str) => {
        setSearchValue(str);
      }, 750),
    [setSearchValue]
  );

  const onChangeInput = useCallback(
    (event) => {
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
