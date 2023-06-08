/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import ContentRenderer from '../../components/organisms/ContentReader';

const prisma = new PrismaClient();

const BlogPage = ({ article }: {article: any}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <ContentRenderer contentElements={article.contentElements} />
    </div>
  );
};

export async function getStaticPaths() {
  const articles = await prisma.article.findMany({
    include: { contentElements: true },
  });
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: {params: any}) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    include: { contentElements: true },
  });

  return { props: { article }, revalidate: 1 };
}

export default BlogPage;