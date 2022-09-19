import { nacelleClient } from "services";
import DynamicComponent from "components/section/DynamicComponent";
import HeadComponent from "components/head/Head";

export default function About(props) {
  return (
    <>
      <HeadComponent title={"About"} />
      <div>
        {/* {props.map(({ fields, type }, i) => (
          <DynamicComponent key={i} component={type} fields={fields} />
        ))} */}

        {
          <DynamicComponent
            key={props.handle}
            component={props.type}
            fields={props.fields}
          />
        }
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // Performs a GraphQL query to Nacelle to get product data,
  // using the handle of the current page.
  // (https://nacelle.com/docs/querying-data/storefront-sdk)
  const content = await nacelleClient.content({
    handles: ["about-us"],
  });
  //console.log("content of about", content);
  return { props: content[0] };
}
