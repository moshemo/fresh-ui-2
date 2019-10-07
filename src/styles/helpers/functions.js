import { material } from "./material-colors";
import { readableColor } from "polished";
import { colors } from "../variables/colors";

// Color Functions
export const rc = color => readableColor(color, colors.dark, colors.light);
