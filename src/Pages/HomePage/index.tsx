import { useGetBreedsQuery } from "../../redux/api/api.caller";
import {
  CircularProgress,
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
  const [listUser, setListUser] = useState<IBreed[]>([]);

  const Loading = () => {
    if (isLoading) return <CircularProgress size={100} />;
  };

  const Error = () => {
    if (isFetchBaseQueryError(error)) {
      return <ErrorPage />;
    } else {
      return;
    }
  };
  const timeDelay = setTimeout(Loading, 50000);
  useEffect(() => {
    if (data) {
      setListUser(data);
    }

    console.log({ listUser });
  }, [data]);

  return (
    <HomeStyled>
      {timeDelay && (
        <>
          <Loading />
          {data && (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      ID
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Type
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Attributes
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Relationships
                    </TableCell>
                    {/* <TableCell></TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listUser.map((item) => (
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
          )}
          <Error />
        </>
      )}
    </HomeStyled>
  );
};

export default HomePage;
