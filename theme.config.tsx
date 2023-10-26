import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';
import { IconFolder, IconFile} from '@tabler/icons-react';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://overextended.dev${asPath}`;
  const description = frontMatter.description || "Documentation for Ice Cluster resources";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/ice-icon.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />

      <div className="kuma-1497335934">
        <div className="kuma-3622173640"></div>
      </div>
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Ice Cluster';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://i.imgur.com/Rq0zGjA.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Ice Cluster
    </div>
  ),
  
  project: {
    link: 'https://github.com/overextended/overextended.github.io',
  },
  chat: {
    link: 'https://discord.overextended.dev',
  },
  docsRepositoryBase: 'https://github.com/overextended/overextended.github.io/blob/main',
  footer: {
    text: 'Ice Cluster',
  },
  search: {
    component: <Search />,
  },
  head: useHead,
  primaryHue: { dark: 190, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type, route }) {
      const folderRoutes = new Set([
        '/icHud',
        '/icMySQL',
        '/icMySQL/Benchmark',
        '/icMySQL/Features',
        '/icMySQL/Functions',
        '/icMySQL/Functions/MySQL',
        '/icMySQL/Functions/Mongo',
        '/icMySQL/Functions/Redis',
        '/icMySQL/Functions/ORM',
        '/icTrophies',
      ]);

      const isFolder = folderRoutes.has(route);
      const icon = isFolder ? <IconFolder /> : <IconFile />;
      return( 
      <> 
         <div className='nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded  nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer'>{icon} {title}</div>
      
      </>
      )
    }
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
