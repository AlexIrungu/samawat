import React from "react";


function FeaturedContent() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Content
        </h2>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured Content Item 1 */}
            <a href="https://example.com/article" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="data:image/jpeg;base64,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"
                  alt="Featured Content 1"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Article
                  </p>
                </div>
              </div>
            </a>
            {/* Featured Content Item 2 */}
            <a href="https://example.com/article" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://via.placeholder.com/350x200"
                  alt="Featured Content 2"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Video
                  </p>
                </div>
              </div>
            </a>
            {/* Featured Content Item 3 */}
            <a href="https://example.com/article" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://via.placeholder.com/350x200"
                  alt="Featured Content 3"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Podcast
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContent;