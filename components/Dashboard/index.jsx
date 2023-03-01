//import NewsLatterBox from "../NewsLatterBox";

const Dashboard = () => {
  return (
    <section id="contact" className="overflow-hidden lg:w-screen   py-3 md:py-10 lg:py-18">
      
    
      
      <div className="container">

      <div class="mb-10">
      <button className="sm:mt-3 md:mt-3  xs:mt-3 inline-flex mr-10 py-5 px-10  bg-primary items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
  <svg class="h-5 w-5 mr-2" viewBox="0 0 1024 1024"xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"/></svg>
    Summarise Video
  </button>

  <button className="sm:mt-3 md:mt-3  xs:mt-3  inline-flex mr-10 py-5 px-10  bg-green items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
  <svg class="h-5 w-5 mr-2" viewBox="0 0 1024 1024"xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"/></svg>
    Summarise text
  </button>

  <button className=" sm:mt-3 xs:mt-3 md:mt-3 inline-flex mr-10 py-5 px-10 bg-red items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mr-3 bi-spotify" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/> </svg>

	Summarise Audio
  </button>
</div>
      <h1 class="text-3xl font-bold text-white mb-10">Recent Summaries</h1>

      <h1 class="text-xl  text-white mb-2">Videos</h1>
        <div className="-mx-4 flex lg:w-full lg:mr-5 flex-wrap bg-slate-600">
      
        <div class="grid lg:grid-cols-4  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1   gap-4 bg-slate-600 w-full">
       
                <div className=" wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">014</div>

                <div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark light:bg-light sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>
        </div>
        </div>

        {
            //Texts
        }

<h1 class="text-xl  text-white mb-2 mt-10">Texts</h1>
        <div className="-mx-4 flex lg:w-full lg:mr-5 flex-wrap bg-slate-600">
      
        <div class="grid lg:grid-cols-4  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  gap-4 bg-slate-600 w-full">
       
                <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">014</div>

                <div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark light:bg-light sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>
        </div>
        </div>

        {
            //Audio
        }

        <h1 class="text-xl  text-white mb-2 mt-10">Audio</h1>
        <div className="-mx-4 flex lg:w-full lg:mr-5 flex-wrap bg-slate-600">
      
        <div class="grid lg:grid-cols-4  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  gap-4 bg-slate-600 w-full">
       
                <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">014</div>

                <div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark light:bg-light sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>

<div  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              ">09</div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
