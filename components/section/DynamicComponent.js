import FeaturedCollection from "./FeaturedCollection";
import Mag1Col from "./Mag1Col";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import SideBySide from "./SideBySide";
import RelatedProducts from "./RelatedProducts";

// resolve Magento component types to Next.js components
// The existing component types are from Contentful which we'll keep in case they switch

const Components = {
  // Home
  mag1Col: Mag1Col,
  heroBanner: Hero,
  sideBySide: SideBySide,
  collectionGrid: FeaturedCollection,
  ourTeam: OurTeam,
  relatedProducts: RelatedProducts,
};

const DynamicComponent = ({ component, fields, ...otherProps }) => {
  // check if component is defined above
  if (
    component === "page" ||
    component === "block" ||
    component === "1column"
  ) {
    component = "mag1Col";
  }

  if (typeof Components[component] !== "undefined") {
    //Determine component for Magento page types

    const Component = Components[component];
    return <Component fields={fields} otherProps={otherProps} />;
  }
  return (
    <p>
      The component <strong>{component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
