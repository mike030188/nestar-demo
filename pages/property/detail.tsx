import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack, Container } from "@mui/material";

const PropertyDetail = () => {
  // console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");

  return <Container>PROPERTY DETAIL</Container>;
};

export default withLayoutBasic(PropertyDetail);

/*import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Property Detail {productId}</div>;
};

export default PropertyDetail;
*/
