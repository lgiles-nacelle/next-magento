import Head from "next/head";

const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>
        {title
          ? `Magento Next Reference Store | ${title}`
          : "Magento Next Reference Store"}
      </title>
    </Head>
  );
};
export default HeadComponent;
