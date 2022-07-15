import Head from 'next/head';

export interface IMetaLayout {
  title: {
    default: string;
    pageOption?: {
      subString: string;
      joinFrom: string;
    };
  };
  keywords?: string[];
  description?: string;
}

const MetaLayout: React.FC<IMetaLayout> = ({
  title,
  keywords,
  description,
}) => {
  return (
    <Head>
      {Array.isArray(keywords) && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {description && <meta name="description" content={description} />}
      <title>
        {title.pageOption
          ? `${title.default} ${title.pageOption.joinFrom} ${title.pageOption.subString}`
          : title.default}
      </title>
    </Head>
  );
};

export default MetaLayout;
