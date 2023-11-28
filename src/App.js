import AboutUs from "./components/AboutUs/AboutUs";
import ContentCreation from "./components/ContentCreation/ContentCreation";
import ContentStats from "./components/ContentStats/ContentStats";
import CreatingAssets from "./components/CreatingAssets/CreatingAssets";
import CurrentlyStruggling from "./components/CurrentlyStruggling/CurrentlyStruggling";
import CustomFunnels from "./components/CustomFunnels/CustomFunnels";
import EngagingCorrectly from "./components/EngagingCorrectly/EngagingCorrectly";
import EstablishingAuthority from "./components/EstablishingAuthority/EstablishingAuthority";
import GetFreeAccess from "./components/GetFreeAccess/GetFreeAccess";
import Herosection from "./components/Herosection/Herosection";
import LeadGeneration from "./components/LeadGeneration/LeadGeneration";
import MasteringPositioning from "./components/MasteringPositioning/MasteringPositioning";
import OfferCreation from "./components/OfferCreation/OfferCreation";
import StillNotConvenced from "./components/StillNotConvinced/StillNotConvinced";

function App() {
  return (
    <div className="mainWrapper">
      <Herosection />
      <CurrentlyStruggling />
      <GetFreeAccess />
      <ContentCreation />
      <OfferCreation />
      <EngagingCorrectly />
      <ContentStats />
      <LeadGeneration />
      <CustomFunnels />
      <EstablishingAuthority />
      <CreatingAssets />
      <MasteringPositioning />
      <StillNotConvenced />
      <GetFreeAccess />
      <AboutUs />
      <GetFreeAccess />
    </div>
  );
}

export default App;
