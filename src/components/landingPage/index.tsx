import Body from "../body";
import Companies from "../companies";
import BlockQoute from "../blockqoute";
import AppStore from "../appstore";
import HomePage from "../homepage";

function LandingPage() {
  return (
    <>
      <HomePage />
      <Body />
      <Companies />
      <BlockQoute />
      <AppStore />
    </>
  );
}

export default LandingPage;
