import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />

      {/* <Stack>
        <Stack className="container">Trend Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Popular Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Advertisement</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Agents</Stack>
      </Stack>
    */}
    </Stack>
  );
};

export default withLayoutMain(Home);
