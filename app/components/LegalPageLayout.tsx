import React from "react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-midnight-blue">
      <h1 className="text-3xl font-bold mb-6 text-velvet-plum border-b border-gray-200 pb-4">
        {title}
      </h1>
      <div className="prose prose-slate max-w-none text-lg leading-relaxed space-y-4">
        {children}
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <Link href="/" className="text-velvet-plum hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
