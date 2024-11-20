'use client';

export function Editor() {
    return (
        <div className="w-full mx-auto">
            <h2 className="text-md font-bold">Editor</h2>
            <textarea
                className="w-full h-full min-h-[600px] resize-none rounded-lg border border-gray-200 bg-white p-4"
                placeholder="This is the editor when the user writes their text"
            />
        </div>
    );
}

