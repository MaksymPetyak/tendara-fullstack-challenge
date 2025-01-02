'use client';

const DEFAULT_TEXT = `Generative AI is reshaping bid management by swiftly producing clear, well-structured content tailored to RFP requirements. It helps proposal teams brainstorm solutions, refine language, and ensure consistent messaging across every section of a bid, saving valuable time and reducing errors.

This technology also automates tedious tasks like checking for compliance and polishing formatting, allowing teams to focus on strategy and value propositions. As a result, bid responses become more compelling, consistent, and efficient, significantly improving the likelihood of success.`

export function Editor() {
    return (
        <div className="mx-auto w-full">
            <h2 className="text-md font-bold">Editor</h2>
            <textarea
                className="size-full min-h-[600px] resize-none rounded-lg border border-gray-200 bg-white p-4"
                placeholder="This is the editor where the user writes their text"
                defaultValue={DEFAULT_TEXT}
            />
        </div>
    );
}

