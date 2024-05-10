

const AddQuery = () => {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-8">
        <h2 className="text-2xl text-[#3B82F6] font-semibold  capitalize dark:text-white">Add Queries</h2>
    
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Product Name</label>
                    <input id="username" 
                    type="text"
                    placeholder="Product Name"
                    name="Product Name"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Product Brand</label>
                    <input id="username" 
                    type="text"
                    placeholder="Product Brand"
                    name="Product Brand"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Product Image-URL</label>
                    <input id="username" 
                    type="text"
                    placeholder="Product Image-URL"
                    name="Product Image-URL"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Query TItle</label>
                    <input id="username" 
                    type="text"
                    placeholder="Query TItle"
                    name="Query TItle"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

              
            </div>
            <br />
                <div>
                    <textarea className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="details" id="" cols="30" rows="10" placeholder="Boycotting Reason Details"></textarea>
                </div>
    
            <div className="flex justify-start mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#3B82F6] focus:outline-none focus:bg-gray-600">Add Query</button>
            </div>
        </form>
    </section>
    );
};

export default AddQuery;