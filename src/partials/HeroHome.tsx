
function HeroHome() {
    return (
<section className="md:flex flex-grow">
<div className="grid max-w-full md:grid-cols-2 lg:grid-cols-4 2xl:">
    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/plant-it.jpeg')] bg-gray-700 bg-blend-multiply 
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white">Plant it</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>

    <figure 
    className="bg-center bg-auto bg-no-repeat bg-[url('../src/images/water-it.webp')] bg-gray-700 bg-blend-multiply
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white">Water it</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure> 

    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/grow-it.webp')] bg-gray-700 bg-blend-multiply
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white">Grow it</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>

    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/enjoy-it.jpeg')] bg-gray-700 bg-blend-multiply
    flex flex-col border-b lg:border-b-0 items-center justify-center p-8 text-center bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-white">Enjoy it</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
</div>
</section>
    );
  }
  
  export default HeroHome;