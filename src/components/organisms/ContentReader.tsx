/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Title from '../atoms/Title';
import Text from '../atoms/Text';

import type { ContentElement } from '~/pages/blog/[slug]';

const ContentElementRenderer = ({ contentElements }: { contentElements: ContentElement[] }) => {

    const orderedContent = contentElements.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order)

    return (
        <div className='max-w-screen-sm col-start-2'>
            {orderedContent.map(element => {
                if (element.type === 'heading') {
                    return <Title key={element.order} id={element.content} tag='h2' size='lg' className='pt-4'>{element.content}</Title>
                } else if (element.type === 'paragraph') {
                    return <Text key={element.order} tag='p' size='base' className='py-2'>{element.content}</Text>
                } else if (element.type === 'image') {
                    return (
                        <figure key={element.order}>
                            <img src={element.content} alt='' width={800} height={500} />
                            <Text tag='figcaption' size='sm' className='italic'>{element.imgCaption}</Text>
                        </figure>
                    )
                } else if (element.type === 'code') {
                    return (
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} key={element.order}>
                            {element.content}
                        </SyntaxHighlighter>
                    );
                }
            })}
        </div>
    )
};

export default ContentElementRenderer;