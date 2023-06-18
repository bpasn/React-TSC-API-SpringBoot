import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import { LabelType } from './datamock'
import { Stack } from '@mui/material';
import { Button, StyledInput } from './StyledComponent';

type Props = {
  labels: LabelType[];
  searching?: string;
  message?:string;
  setState: React.Dispatch<React.SetStateAction<string>>
}
const SearchAutocomplete: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [getLabel, setLabels] = React.useState<LabelType[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [pendingValue, setPendingValue] = React.useState<LabelType>();
  const [value, setValue] = React.useState<LabelType>();
  const [valueSearch, setValueSearch] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false)
  console.log(pendingValue)
  const handleClick = (event: React.MouseEvent<HTMLElement>, label?: LabelType) => {
    setOpen(!open)
    if (label) {
      setPendingValue(label)
    }

    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      // anchorEl.focus();
    }
    // setAnchorEl(null);
  };
  console.log(props.labels)
  return (
    <React.Fragment>
      <Stack>
        <Box sx={{ backgroundColor: "#fff", width: "100%", fontSize: "1rem", height: "40px", border: '1px solid #ced4da', borderRadius: "5px", padding: ".375rem .75rem", color: "#495057", }}>
          <Button sx={{ padding: "3px" }} disableRipple aria-describedby={'id'} onClick={handleClick}>
            <span>{pendingValue?.name || "Labels"}</span>
            {!open && <ArrowDropDownIcon sx={{
              width: "26px",
              fontSize: "16px",
              height: "26px",
            }} />}
          </Button>
        </Box>
        <Box >
          <ClickAwayListener onClickAway={handleClose}>
            <Box sx={{ display: open ? 'block' : 'none', border: "1px solid #ced4da", padding: "4px", backgroundColor: "#fff" }}>
              <StyledInput
                sx={{
                  padding: "0"
                }}
                id="search"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  props.setState(e.target.value)
                }}
                fullWidth
              />
              <Box component={"ul"} sx={{
                '& li::hover': {
                  backgroundColor: "red !important",

                }
              }}>
                {props.labels.map((item: LabelType) => {
                  return (
                    <Box
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e, item)}
                      key={item.color + item.description + item.name} sx={{
                        listStyle: "none",
                        padding: "6px",
                        color: "#212529",
                        fontSize: "16px",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        '&:hover': {
                          color: "#fff",
                          backgroundColor: "#00A950"
                        }
                      }} component={"li"}>
                      {item.name}
                    </Box>
                  )
                })}
              </Box>
              {
                props.message ? <Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>{props.message}</Box>
                : props.searching === 'search'
                  ?(<Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>Searching</Box>)
                   : <Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>Please enter 4 or mor characters</Box>
              }
            </Box>
          </ClickAwayListener>
        </Box>
      </Stack >

    </React.Fragment >
  );
}
export default SearchAutocomplete