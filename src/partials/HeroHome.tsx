
function HeroHome() {
    return (
<section className="md:flex flex-grow">

  {/* Hero Content */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 flex-1 h-full">

  {/* 1 */}
    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/seed.jpeg')]
    bg-gray-600 bg-blend-multiply hover:bg-blue-400 ease-in-out duration-500
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200
    cursor-pointer
    relative
    group"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <h3 className="text-5xl font-semibold text-white group-hover:text-6xl duration-200">Plant it</h3>
            <p className="absolute bottom-1 left-3 my-4 px-3 border-solid border-2 border-gray-400 rounded-full">
              Plant your seeds right away
              </p>
              <svg className="absolute bottom-5 right-6 w-5 h-5 fill-current text-gray-100" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
        </blockquote>
          
    </figure>

   {/* 2 */}
    <figure 
    className="bg-center bg-auto bg-no-repeat bg-[url('../src/images/water-it.webp')] 
    bg-gray-600 bg-blend-multiply hover:bg-blue-400 ease-in-out duration-500
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200
    cursor-pointer
    relative
    group"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <h3 className="text-5xl font-semibold text-white group-hover:text-6xl duration-200">Water it</h3>
            <p className="absolute bottom-1 left-3 my-4 px-3 border-solid border-2 border-gray-400 rounded-full">Water them in the right way</p>
            <svg className="absolute bottom-5 right-6 w-5 h-5 fill-current text-gray-100" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
        </blockquote>   
    </figure> 

   {/* 3 */}
    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/grow-it.webp')] 
    bg-gray-600 bg-blend-multiply hover:bg-blue-400 ease-in-out duration-500
    flex flex-col border-b lg:border-b-0 md:border-r items-center justify-center p-8 text-center bg-white border-gray-200
    cursor-pointer
    relative
    group"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <h3 className="text-5xl font-semibold text-white group-hover:text-6xl duration-200">Grow it</h3>
            <p className="absolute bottom-1 left-3 my-4 px-3 border-solid border-2 border-gray-400 rounded-full">Watch them grow day by day</p>
            <svg className="absolute bottom-5 right-6 w-5 h-5 fill-current text-gray-100" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
        </blockquote>   
    </figure>

   {/* 4 */}
    <figure 
    className="bg-center bg-cover bg-no-repeat bg-[url('../src/images/enjoy-it.jpeg')] 
    bg-gray-600 bg-blend-multiply hover:bg-blue-400 ease-in-out duration-500
    flex flex-col border-b lg:border-b-0 items-center justify-center p-8 text-center bg-white border-gray-200
    cursor-pointer
    relative
    group"
    >
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8">
            <h3 className="text-5xl font-semibold text-white group-hover:text-6xl duration-200">Enjoy it</h3>
            <p className="absolute bottom-1 left-3 my-4 px-3 border-solid border-2 border-gray-400 rounded-full">
              Enjoy them everyday
              </p>
            <svg className="absolute bottom-5 right-6 w-5 h-5 fill-current text-gray-100" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
        </blockquote>   
    </figure>
</div>
</section>
    );
  }
  
  export default HeroHome;