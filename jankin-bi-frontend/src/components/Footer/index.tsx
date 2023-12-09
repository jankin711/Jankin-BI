import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'Jankin出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/jankin711',
          blankTarget: true,
        },
        {
          key: 'Jankin 智能 BI',
          title: 'Jankin 智能 BI',
          href: 'https://github.com/jankin711/Jankin-BI',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
