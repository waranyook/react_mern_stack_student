import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as stockActions from "./../../../actions/stock.action";

type StockCreatePageProps = {
  //
};

const StockCreatePage: React.FC<any> = () => {
  const showForm = (props: any) => {
    <Form>
      <Card>
        <CardContent sx={{ padding: 4 }}>
          <Typography gutterBottom variant="h3">
            Create Stock
          </Typography>
        </CardContent>
      </Card>
    </Form>;
  };

  return (
    <Box>
      <Formik
        initialValues={{ name: "", stock: 10, price: 90 }}
        onSubmit={(values: any, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {(props: any) => showForm(props)}
      </Formik>
    </Box>
  );
};

export default StockCreatePage;
