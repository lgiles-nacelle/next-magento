import ContactForm from "components/contact/ContactForm";
import HeadComponent from "components/head/Head";
import DynamicComponent from "components/section/DynamicComponent";
import { nacelleClient } from "services";

export default function Contact(props) {
  return (
    <>
      <HeadComponent title={"Contact Us"} />
      <div>
        <DynamicComponent
          key={props.handle}
          component={props.type}
          fields={props.fields}
        />
        <ContactForm />
      </div>
    </>
  );
}
export async function getStaticProps() {
  // Performs a GraphQL query to Nacelle to get product data,
  // using the handle of the current page.
  // (https://nacelle.com/docs/querying-data/storefront-sdk)
  const content = await nacelleClient.content({
    handles: ["contact-us-info"],
  });
  return { props: content[0] };
}
