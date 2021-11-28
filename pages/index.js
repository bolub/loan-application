import Head from 'next/head';
import Link from 'next/link';
import Select from 'react-select';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loan Application</title>
      </Head>

      {/* <Navbar /> */}

      <main className='px-5 md:px-16 flex flex-col h-auto m-auto'>
        <div className='md:w-8/12 m-auto text-center flex justify-center items-center flex-col'>
          <h1 className='font-bold text-blue-500 text-md uppercase mb-5'>
            Loan Application
          </h1>

          <div className='flex flex-col md:flex-row'>
            <Link href='/loanApplication'>
              <div className='w-full transition duration-100 md:w-56 mb-5 md:mb-0 md:mr-4 border rounded-md px-10 py-16 cursor-pointer flex-flex-col hover:bg-blue-500 hover:text-white'>
                <p className='text-2xl mb-2'>💰</p>
                <p className='text-lg'>Loan Application</p>
              </div>
            </Link>

            <Link href='/foodBasket'>
              <div className='w-full transition duration-100 md:w-56 md:mr-4 border rounded-md px-10 py-16 cursor-pointer flex-flex-col hover:bg-blue-500 hover:text-white'>
                <p className='text-2xl mb-2'>🧺</p>
                <p className='text-lg'>Food Basket</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
