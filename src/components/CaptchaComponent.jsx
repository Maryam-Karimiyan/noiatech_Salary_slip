import { useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

const CaptchaComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  // تابع اصلی برای بررسی reCAPTCHA
  const verifyCaptcha = () => {
    // اطمینان از بارگذاری کامل reCAPTCHA قبل از فراخوانی
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(function () {
        // YOUR_SITE_KEY را با کلید سایت خود جایگزین کنید
        grecaptcha
          .execute("6LcZVdErAAAAAA9hMcVYlUo3mmET_17vtfmSWnIg", { action: "submit" })
          .then(function (token) {
            // در اینجا توکن reCAPTCHA را دریافت می‌کنید
            console.log("reCAPTCHA Token:", token);

            // توکن را به سرور ارسال کنید تا اعتبار آن بررسی شود.
            // مثال:
            // sendTokenToServer(token);
          })
          .catch((error) => {
            console.error("reCAPTCHA error:", error);
            setIsChecked(false); // اگر خطایی رخ داد، چک‌باکس را غیرفعال کنید
          });
      });
    }
  };

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      verifyCaptcha();
    }
  };

  return (
    <Box sx={{ direction: "rtl", width: "100%" }}>
      <FormControlLabel
        sx={{ mr: -1 }}
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheck}
            name="not-a-robot"
          />
        }
        label={<Typography fontSize={18} color="primary.dark">ربات نیستم</Typography>}
      />
    </Box>
  );
};

export default CaptchaComponent;
