import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowDown } from "../../assets";
export default function AccordionExpandIcon() {
  const months = [
    { month: "فروردین", member: 6 },
    { month: "اردیبهشت", member: 8 },
    { month: "خرداد", member: 0 },
    { month: "تیر", member: 4 },
    { month: "مرداد", member: 0 },
    { month: "شهریور", member: 7 },
    { month: "مهر", member: 3 },
    { month: "آبان", member: 5 },
    { month: "آذر", member: 11 },
    { month: "دی", member: 2 },
    { month: "بهمن", member: 10 },
    { month: "اسفند", member: 1 },
  ];

  return (
    <Stack sx={{ gap: 1 }}>
      {months
        .filter((item) => item.member > 0)
        .map((item, index) => (
          <Accordion
            key={index}
            square
            sx={{
              direction: "rtl",
              boxShadow: "none",
              border: "1px solid",
              borderColor: "primary.light",
              borderRadius: 2,
              "&:before": {
                display: "none", // اون خط/مربع پیشفرض رو حذف میکنه
              },
              "& .MuiAccordionSummary-root": {
                minHeight: "unset",
                py: 1, // بالا و پایین
                px: 1.5,
              },
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Stack>
                <Typography sx={{ color: "primary.dark", fontSize: 15 }}>
                  {item.month}
                </Typography>
                <Typography
                  sx={{ color: "secondary.contrastText", fontSize: 13 }}
                >
                  {item.member} نفر
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Stack>
  );
}
