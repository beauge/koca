import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Koca',
  description:
    'Find the highest quality products at fair prices. Not selling, displaying for demo purposes only. I do not own any of the products listed on this demo site.',
  keywords:
    'electronics, ecommerce, buy electronics, cheap electronics, quality electronics',
};

export default Meta;
