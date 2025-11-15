import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

interface ExampleCodeProps {
  title?: string;
  language?: string;
  code: string;
  defaultExpanded?: boolean;
  showLineNumbers?: boolean;
}

export default function ExampleCode({
  title = 'Example Code',
  language = 'markdown',
  code,
  defaultExpanded = false,
  showLineNumbers = true,
}: ExampleCodeProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="my-6 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">📝</span>
          <span className="font-semibold text-gray-800">{title}</span>
          <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600 border border-gray-200">
            {language}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => {
                navigator.clipboard.writeText(code);
              }}
              className="absolute top-3 right-3 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition-colors z-10 flex items-center gap-1"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </button>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              showLineNumbers={showLineNumbers}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.875rem',
                padding: '1.5rem',
              }}
              lineNumberStyle={{
                minWidth: '2.5em',
                paddingRight: '1em',
                color: '#6e7681',
                userSelect: 'none',
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}
