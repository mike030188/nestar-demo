import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  // console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");

  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">PROPERTY LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
