/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ContentElementRenderer = ({ contentElements }: {contentElements: any}) => {

    console.log('contentElements', contentElements)
    const orderedContent = contentElements.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order)
    console.log('orderedContent', orderedContent)

    return (
        <>
            {orderedContent.map(element => {
                if (element.type === 'heading') {
                    return <h2>{element.content}</h2>
                } else if (element.type === 'paragraph') {
                    return <p>{element.content}</p>
                } else if (element.type === 'code') {
                    return (
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                            {element.content}
                        </SyntaxHighlighter>
                    );
                }
            })}
        </>
    )
};

export default ContentElementRenderer;