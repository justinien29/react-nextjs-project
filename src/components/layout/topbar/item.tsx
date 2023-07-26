import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  padding: 0,
  borderRadius: 0,
  paddingTop: "4px",
  borderBottom: "4px transparent solid",
  fontFamily: "Raleway",
  color: "#707070",
  "&:hover": {
    color: "#2538df",
    borderBottom: "4px #2538df solid",
  },
  "&:focus": {
    color: "#2538df",
    borderBottom: "4px #2538df solid",
  },
}));

export default function TopBarItem() {
  return (
    <StyledButton
      className="menuItem"
      variant="text"
      sx={{ minHeight: "inherit" }}
    >
      Text
    </StyledButton>
  );
}
