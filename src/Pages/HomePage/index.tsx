import { useGetBreedsQuery } from "../../redux/api/api.caller";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HomeStyled } from "./styled";
import { useEffect, useState } from "react";
import { IBreed } from "../../interface/breed";
import { isFetchBaseQueryError } from "../../component/handleFetching";
import ErrorPage from "../ErrorPage";

const HomePage = () => {
  const { data, isLoading, error } = useGetBreedsQuery();
  const [listDogs, setListDogs] = useState<IBreed[]>([]);
  const [numericStatus, setNumericStatus] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 3;

  const maxPage = Math.ceil(listDogs.length / perPage);

  const currentData = () => {
    const begin = (currentPage - 1) * perPage;
    const end = begin + perPage;
    return listDogs.slice(begin, end);
  };

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  };

  const handleChange = (_: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    jump(p);
  };

  const Loading = () => {
    if (isLoading) return <CircularProgress size={100} />;
    return null;
  };

  const Error = () => {
    if (isFetchBaseQueryError(error)) {
      const status = error.status;
      if (typeof status === "number") {
        setNumericStatus(status);
      } else {
        switch (status) {
          case "FETCH_ERROR":
            setNumericStatus(500);
            break;
          case "PARSING_ERROR":
            setNumericStatus(404);
            break;
          case "TIMEOUT_ERROR":
            setNumericStatus(408);
            break;
          case "CUSTOM_ERROR":
            setNumericStatus(520);
            break;
          default:
            setNumericStatus(500);
            break;
        }
      }

      // console.log("Error status:", status, typeof status);
      return <ErrorPage status={numericStatus} />;
    }
    return null;
  };
  useEffect(() => {
    if (data) {
      setListDogs(data);
    }

    console.log({ listDogs });
  }, [data]);

  return (
    <HomeStyled>
      <>
        <Loading />
        {data && (
          <Paper>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="table-header">
                      ID
                    </TableCell>
                    <TableCell align="center" className="table-header">
                      Type
                    </TableCell>
                    <TableCell align="center" className="table-header">
                      Attributes
                    </TableCell>
                    <TableCell align="center" className="table-header">
                      Relationships
                    </TableCell>
                    {/* <TableCell></TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentData().map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.type}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {item.attributes.name}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.attributes.description}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <TableRow>{item.attributes.life.min}</TableRow>
                            <TableRow>{item.attributes.life.max}</TableRow>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <TableRow>
                              {item.attributes.male_weight.min}
                            </TableRow>
                            <TableRow>
                              {item.attributes.male_weight.max}
                            </TableRow>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <TableRow>
                              {item.attributes.female_weight.min}
                            </TableRow>
                            <TableRow>
                              {item.attributes.female_weight.max}
                            </TableRow>
                          </TableCell>
                        </TableRow>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TableRow>{item.relationships.group.data.id}</TableRow>
                        <TableRow>
                          {item.relationships.group.data.type}
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                display: { xl: "flex", xs: "none" },
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <Pagination
                count={maxPage}
                page={page}
                shape="rounded"
                onChange={handleChange}
              />
            </Box>
          </Paper>
        )}
        <Error />
      </>
    </HomeStyled>
  );
};

export default HomePage;
