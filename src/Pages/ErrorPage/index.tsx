import { Typography } from "@mui/material";
import { ErrorCheckProps } from "../../interface/errorcheck";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = ({ status }: ErrorCheckProps) => {
  const navigate = useNavigate();

  // console.log({ status });
  const errorMessages: Record<number, string> = {
    400: "400 Bad Request: Yêu cầu không hợp lệ.",
    401: "401 Unauthorized: Người dùng chưa xác thực.",
    403: "403 Forbidden: Người dùng không được phép truy cập.",
    404: "404 Not Found: Không tìm thấy tài nguyên.",
    408: "408 Timeout Error: Kết nối quá thời gian chờ",
    500: "500 Internal Server Error: Lỗi kết nối mạng",
  };
  const message =
    errorMessages[status] || `Lỗi không xác định (HTTP ${status})`;

  useEffect(() => {
    if (status === 403) {
      navigate("/login");
    }
  }, [status]);

  return (
    <>
      <Typography color="warning" variant="h3" fontWeight="bold">
        Fetching Error
      </Typography>
      {/* <Typography variant="h6">Some thing wrong internet!</Typography> */}
      <Typography variant="h6">{message}</Typography>
    </>
  );
};

export default ErrorPage;
