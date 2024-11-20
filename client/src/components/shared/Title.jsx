import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Lak App",
  description = "Connect with your emotions",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
