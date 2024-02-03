"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Poppins } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

function AccordionAchievment({ dataGagasan, iconIdeas }) {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: poppins.fontFamily,
        fontWeight: 700,
      },
    },
    palette: {
      primary: {
        main: "#28B2FF",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-auto">
        {dataGagasan.map((data, index) => (
          <Accordion
            style={{
              backgroundColor: "none",
              boxShadow: "none",
              borderRadius: "12px",
              border: "1px solid gray",
              borderColor: "#E5E5E5",

              marginBottom: "8px",
            }}
            key={index}
          >
            <AccordionSummary
              style={{
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
              }}
              expandIcon={<IoIosArrowDropdownCircle size={25} />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <div className="items-center">
                
                <Typography sx={{fontSize: "24px"}}>{data.idea_title}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails key={index}>
              <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                {data.idea_description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default AccordionAchievment;
